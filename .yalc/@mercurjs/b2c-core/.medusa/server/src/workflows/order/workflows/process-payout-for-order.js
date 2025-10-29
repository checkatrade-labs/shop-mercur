"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPayoutForOrderWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const workflows_sdk_2 = require("@medusajs/workflows-sdk");
const framework_1 = require("@mercurjs/framework");
const payout_1 = require("../../../modules/payout");
const steps_1 = require("../steps");
exports.processPayoutForOrderWorkflow = (0, workflows_sdk_2.createWorkflow)({ name: "process-payout-for-order" }, function (input) {
    (0, steps_1.validateNoExistingPayoutForOrderStep)(input.order_id);
    const { data: orders } = (0, core_flows_1.useQueryGraphStep)({
        entity: "order",
        fields: [
            "seller.id",
            "total",
            "currency_code",
            "payment_collections.payment_sessions.*",
        ],
        filters: {
            id: input.order_id,
        },
        options: { throwIfKeyNotFound: true },
    }).config({ name: "query-order" });
    const order = (0, workflows_sdk_1.transform)(orders, (orders) => {
        const transformed = orders[0];
        return {
            seller_id: transformed.seller.id,
            id: transformed.id,
            total: transformed.total,
            currency_code: transformed.currency_code,
            source_transaction: transformed.payment_collections[0].payment_sessions[0].data
                .latest_charge,
        };
    });
    const { data: sellers } = (0, core_flows_1.useQueryGraphStep)({
        entity: "seller",
        fields: ["*", "payout_account.*"],
        filters: {
            id: order.seller_id,
        },
    }).config({ name: "query-seller" });
    const seller = (0, workflows_sdk_1.transform)(sellers, (sellers) => sellers[0]);
    (0, steps_1.validateSellerPayoutAccountStep)(seller);
    const payout_total = (0, steps_1.calculatePayoutForOrderStep)(input);
    const { payout, err: createPayoutErr } = (0, steps_1.createPayoutStep)({
        transaction_id: order.id,
        amount: payout_total,
        currency_code: order.currency_code,
        account_id: seller.payout_account.id,
        source_transaction: order.source_transaction,
    });
    (0, workflows_sdk_1.when)({ createPayoutErr }, ({ createPayoutErr }) => !createPayoutErr).then(() => {
        (0, core_flows_1.createRemoteLinkStep)([
            {
                [utils_1.Modules.ORDER]: {
                    order_id: order.id,
                },
                [payout_1.PAYOUT_MODULE]: {
                    payout_id: payout.id,
                },
            },
        ]);
        (0, core_flows_1.emitEventStep)({
            eventName: framework_1.PayoutWorkflowEvents.SUCCEEDED,
            data: {
                id: payout.id,
                order_id: order.id,
            },
        }).config({ name: "emit-payout-succeeded" });
    });
    (0, workflows_sdk_1.when)({ createPayoutErr }, ({ createPayoutErr }) => createPayoutErr).then(() => {
        (0, core_flows_1.emitEventStep)({
            eventName: framework_1.PayoutWorkflowEvents.FAILED,
            data: {
                order_id: order.id,
            },
        }).config({ name: "emit-payout-failed" });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzcy1wYXlvdXQtZm9yLW9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9vcmRlci93b3JrZmxvd3MvcHJvY2Vzcy1wYXlvdXQtZm9yLW9yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFvRDtBQUNwRCxxRUFBb0U7QUFDcEUsNERBSXFDO0FBQ3JDLDJEQUF5RDtBQUV6RCxtREFBMkQ7QUFDM0Qsb0RBQXdEO0FBRXhELG9DQUtrQjtBQU1MLFFBQUEsNkJBQTZCLEdBQUcsSUFBQSw4QkFBYyxFQUN6RCxFQUFFLElBQUksRUFBRSwwQkFBMEIsRUFBRSxFQUNwQyxVQUFVLEtBQXlDO0lBQ2pELElBQUEsNENBQW9DLEVBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXJELE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBQSw4QkFBaUIsRUFBQztRQUN6QyxNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRTtZQUNOLFdBQVc7WUFDWCxPQUFPO1lBQ1AsZUFBZTtZQUNmLHdDQUF3QztTQUN6QztRQUNELE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUNuQjtRQUNELE9BQU8sRUFBRSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRTtLQUN0QyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFFbkMsTUFBTSxLQUFLLEdBQUcsSUFBQSx5QkFBUyxFQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3pDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QixPQUFPO1lBQ0wsU0FBUyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNoQyxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUU7WUFDbEIs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