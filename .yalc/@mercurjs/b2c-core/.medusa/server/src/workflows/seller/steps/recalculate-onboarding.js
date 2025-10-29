"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recalculateOnboardingStep = void 0;
const zod_1 = require("zod");
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const seller_1 = require("../../../modules/seller");
const seller_payout_account_1 = __importDefault(require("../../../links/seller-payout-account"));
const seller_product_1 = __importDefault(require("../../../links/seller-product"));
const seller_stock_location_1 = __importDefault(require("../../../links/seller-stock-location"));
exports.recalculateOnboardingStep = (0, workflows_sdk_1.createStep)("recalculate-onboarding", async (seller_id, { container }) => {
    const query = container.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    /* Store information */
    const { data: [store], } = await query.graph({
        entity: "seller",
        fields: ["*"],
        filters: {
            id: seller_id,
        },
    });
    const { success: store_information } = zod_1.z
        .object({
        name: zod_1.z.string().min(1),
        handle: zod_1.z.string().min(1),
        description: zod_1.z.string().min(1),
        photo: zod_1.z.string().nullish(),
        address_line: zod_1.z.string().min(1),
        city: zod_1.z.string().min(1),
        postal_code: zod_1.z.string().min(1),
        country_code: zod_1.z.string().min(1),
        tax_id: zod_1.z.string().nullish(),
    })
        .safeParse(store);
    /* Products added */
    const { data: sellerProducts } = await query.graph({
        entity: seller_product_1.default.entryPoint,
        fields: ["id"],
        filters: {
            seller_id,
        },
    });
    const products = !!sellerProducts.length;
    /* Shipping locations */
    const { data: sellerLocations } = await query.graph({
        entity: seller_stock_location_1.default.entryPoint,
        fields: ["id"],
        filters: { seller_id },
    });
    const locations_shipping = !!sellerLocations.length;
    /* Stripe connection */
    const { data: [sellerPayoutAccountRelations], } = await query.graph({
        entity: seller_payout_account_1.default.entryPoint,
        fields: ["id"],
        filters: { seller_id },
    });
    const stripe_connection = !!sellerPayoutAccountRelations;
    /* Update onboarding */
    const { data: [onboarding], } = await query.graph({
        entity: "seller_onboarding",
        fields: ["id"],
        filters: {
            seller_id,
        },
    });
    const toUpdate = {
        seller_id,
        stripe_connection,
        products,
        store_information,
        locations_shipping,
    };
    const sellerService = container.resolve(seller_1.SELLER_MODULE);
    const updatedOnboarding = onboarding
        ? await sellerService.updateSellerOnboardings({
            ...toUpdate,
            id: onboarding.id,
        })
        : await sellerService.createSellerOnboardings(toUpdate);
    return new workflows_sdk_1.StepResponse(updatedOnboarding);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjYWxjdWxhdGUtb25ib2FyZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2VsbGVyL3N0ZXBzL3JlY2FsY3VsYXRlLW9uYm9hcmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkJBQXdCO0FBRXhCLHFEQUFzRTtBQUN0RSxxRUFBNkU7QUFFN0Usb0RBQTZFO0FBRTdFLGlHQUF1RTtBQUN2RSxtRkFBMEQ7QUFDMUQsaUdBQXVFO0FBRTFELFFBQUEseUJBQXlCLEdBQUcsSUFBQSwwQkFBVSxFQUNqRCx3QkFBd0IsRUFDeEIsS0FBSyxFQUFFLFNBQWlCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsdUJBQXVCO0lBQ3ZCLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FDZCxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsUUFBUTtRQUNoQixNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDYixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsU0FBUztTQUNkO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQUM7U0FDckMsTUFBTSxDQUFDO1FBQ04sSUFBSSxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixXQUFXLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUIsS0FBSyxFQUFFLE9BQUMsQ0FB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