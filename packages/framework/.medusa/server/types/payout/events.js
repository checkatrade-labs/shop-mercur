"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutSummaryEvents = exports.PayoutWebhookAction = exports.PayoutWebhookEvents = exports.PayoutWorkflowEvents = void 0;
var PayoutWorkflowEvents;
(function (PayoutWorkflowEvents) {
    PayoutWorkflowEvents["FAILED"] = "payout.failed";
    PayoutWorkflowEvents["SUCCEEDED"] = "payout.succeeded";
    PayoutWorkflowEvents["RECEIVED"] = "payout.received";
})(PayoutWorkflowEvents || (exports.PayoutWorkflowEvents = PayoutWorkflowEvents = {}));
var PayoutWebhookEvents;
(function (PayoutWebhookEvents) {
    PayoutWebhookEvents["ACCOUNT_WEBHOOK_RECEIVED"] = "payout_account.webhook_received";
})(PayoutWebhookEvents || (exports.PayoutWebhookEvents = PayoutWebhookEvents = {}));
var PayoutWebhookAction;
(function (PayoutWebhookAction) {
    PayoutWebhookAction["ACCOUNT_AUTHORIZED"] = "account_authorized";
    PayoutWebhookAction["ACCOUNT_DEAUTHORIZED"] = "account_deauthorized";
    PayoutWebhookAction["ACCOUNT_REQUIRES_ACTION"] = "account_requires_action";
})(PayoutWebhookAction || (exports.PayoutWebhookAction = PayoutWebhookAction = {}));
var PayoutSummaryEvents;
(function (PayoutSummaryEvents) {
    PayoutSummaryEvents["NOTIFICATION_SENT"] = "payout.notification_sent";
})(PayoutSummaryEvents || (exports.PayoutSummaryEvents = PayoutSummaryEvents = {}));
//# sourceMappingURL=events.js.map