"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PayoutProvider", {
    enumerable: true,
    get: function() {
        return PayoutProvider;
    }
});
const _stripe = /*#__PURE__*/ _interop_require_default(require("stripe"));
const _utils = require("@medusajs/framework/utils");
const _ = require("..");
const _framework = require("@mercurjs/framework");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let PayoutProvider = class PayoutProvider {
    async createPayout({ amount, currency, account_reference_id, transaction_id, source_transaction }) {
        try {
            this.logger_.info(`Processing payout for transaction with ID ${transaction_id}`);
            const transfer = await this.client_.transfers.create({
                currency,
                destination: account_reference_id,
                amount: (0, _framework.getSmallestUnit)(amount, currency),
                source_transaction,
                metadata: {
                    transaction_id
                }
            }, {
                idempotencyKey: transaction_id
            });
            return {
                data: transfer
            };
        } catch (error) {
            this.logger_.error("Error occured while creating payout", error);
            const message = error?.message ?? "Error occured while creating payout";
            throw new _utils.MedusaError(_utils.MedusaError.Types.UNEXPECTED_STATE, message);
        }
    }
    async createPayoutAccount({ context, account_id }) {
        try {
            const { country } = context;
            this.logger_.info("Creating payment profile");
            if (!(0, _utils.isPresent)(country)) {
                throw new _utils.MedusaError(_utils.MedusaError.Types.INVALID_DATA, `"country" is required`);
            }
            const account = await this.client_.accounts.create({
                country: country,
                type: "standard",
                metadata: {
                    account_id
                }
            });
            return {
                data: account,
                id: account.id
            };
        } catch (error) {
            const message = error?.message ?? "Error occured while creating payout account";
            throw new _utils.MedusaError(_utils.MedusaError.Types.UNEXPECTED_STATE, message);
        }
    }
    async initializeOnboarding(accountId, context) {
        try {
            this.logger_.info("Initializing onboarding");
            if (!(0, _utils.isPresent)(context.refresh_url)) {
                throw new _utils.MedusaError(_utils.MedusaError.Types.INVALID_DATA, `'refresh_url' is required`);
            }
            if (!(0, _utils.isPresent)(context.return_url)) {
                throw new _utils.MedusaError(_utils.MedusaError.Types.INVALID_DATA, `'return_url' is required`);
            }
            const accountLink = await this.client_.accountLinks.create({
                account: accountId,
                refresh_url: context.refresh_url,
                return_url: context.return_url,
                type: "account_onboarding"
            });
            return {
                data: accountLink
            };
        } catch (error) {
            const message = error?.message ?? "Error occured while initializing onboarding";
            throw new _utils.MedusaError(_utils.MedusaError.Types.UNEXPECTED_STATE, message);
        }
    }
    async getAccount(accountId) {
        try {
            const account = await this.client_.accounts.retrieve(accountId);
            return account;
        } catch (error) {
            const message = error?.message ?? "Error occured while getting account";
            throw new _utils.MedusaError(_utils.MedusaError.Types.UNEXPECTED_STATE, message);
        }
    }
    async reversePayout(input) {
        try {
            const reversal = await this.client_.transfers.createReversal(input.transfer_id, {
                amount: (0, _framework.getSmallestUnit)(input.amount, input.currency)
            });
            return reversal;
        } catch (error) {
            const message = error?.message ?? "Error occured while reversing payout";
            throw new _utils.MedusaError(_utils.MedusaError.Types.UNEXPECTED_STATE, message);
        }
    }
    async getWebhookActionAndData(payload) {
        const signature = payload.headers["stripe-signature"];
        const event = this.client_.webhooks.constructEvent(payload.rawData, signature, this.config_.webhookSecret);
        const data = event.data.object;
        switch(event.type){
            case "account.updated":
                // here you can validate account data to make sure it's valid
                return {
                    action: _framework.PayoutWebhookAction.ACCOUNT_AUTHORIZED,
                    data: {
                        account_id: data.metadata?.account_id
                    }
                };
        }
        throw new _utils.MedusaError(_utils.MedusaError.Types.UNEXPECTED_STATE, `Unsupported event type: ${event.type}`);
    }
    constructor({ logger, configModule }){
        _define_property(this, "config_", void 0);
        _define_property(this, "logger_", void 0);
        _define_property(this, "client_", void 0);
        this.logger_ = logger;
        const moduleDef = configModule.modules?.[_.PAYOUT_MODULE];
        if (typeof moduleDef !== "boolean" && moduleDef?.options) {
            this.config_ = {
                apiKey: process.env.STRIPE_SECRET_API_KEY,
                webhookSecret: process.env.STRIPE_CONNECTED_ACCOUNTS_WEBHOOK_SECRET
            };
        }
        this.client_ = new _stripe.default(this.config_.apiKey, {
            // @ts-ignore
            apiVersion: "2025-02-24.acacia"
        });
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3BheW91dC9zZXJ2aWNlcy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcblxuaW1wb3J0IHsgQ29uZmlnTW9kdWxlLCBMb2dnZXIgfSBmcm9tIFwiQG1lZHVzYWpzL2ZyYW1ld29yay90eXBlc1wiO1xuaW1wb3J0IHsgTWVkdXNhRXJyb3IsIGlzUHJlc2VudCB9IGZyb20gXCJAbWVkdXNhanMvZnJhbWV3b3JrL3V0aWxzXCI7XG5cbmltcG9ydCB7IFBBWU9VVF9NT0RVTEUgfSBmcm9tIFwiLi5cIjtcblxuaW1wb3J0IHtcbiAgQ3JlYXRlUGF5b3V0QWNjb3VudElucHV0LFxuICBDcmVhdGVQYXlvdXRBY2NvdW50UmVzcG9uc2UsXG4gIElQYXlvdXRQcm92aWRlcixcbiAgSW5pdGlhbGl6ZU9uYm9hcmRpbmdSZXNwb25zZSxcbiAgUGF5b3V0V2ViaG9va0FjdGlvbixcbiAgUGF5b3V0V2ViaG9va0FjdGlvblBheWxvYWQsXG4gIFByb2Nlc3NQYXlvdXRJbnB1dCxcbiAgUHJvY2Vzc1BheW91dFJlc3BvbnNlLFxuICBSZXZlcnNlUGF5b3V0SW5wdXQsXG4gIGdldFNtYWxsZXN0VW5pdCxcbn0gZnJvbSBcIkBtZXJjdXJqcy9mcmFtZXdvcmtcIjtcblxudHlwZSBJbmplY3RlZERlcGVuZGVuY2llcyA9IHtcbiAgbG9nZ2VyOiBMb2dnZXI7XG4gIGNvbmZpZ01vZHVsZTogQ29uZmlnTW9kdWxlO1xufTtcblxudHlwZSBTdHJpcGVDb25uZWN0Q29uZmlnID0ge1xuICBhcGlLZXk6IHN0cmluZztcbiAgd2ViaG9va1NlY3JldDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIFBheW91dFByb3ZpZGVyIGltcGxlbWVudHMgSVBheW91dFByb3ZpZGVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbmZpZ186IFN0cmlwZUNvbm5lY3RDb25maWc7XG4gIHByb3RlY3RlZCByZWFkb25seSBsb2dnZXJfOiBMb2dnZXI7XG4gIHByb3RlY3RlZCByZWFkb25seSBjbGllbnRfOiBTdHJpcGU7XG5cbiAgY29uc3RydWN0b3IoeyBsb2dnZXIsIGNvbmZpZ01vZHVsZSB9OiBJbmplY3RlZERlcGVuZGVuY2llcykge1xuICAgIHRoaXMubG9nZ2VyXyA9IGxvZ2dlcjtcblxuICAgIGNvbnN0IG1vZHVsZURlZiA9IGNvbmZpZ01vZHVsZS5tb2R1bGVzPy5bUEFZT1VUX01PRFVMRV07XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVEZWYgIT09IFwiYm9vbGVhblwiICYmIG1vZHVsZURlZj8ub3B0aW9ucykge1xuICAgICAgdGhpcy5jb25maWdfID0ge1xuICAgICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfQVBJX0tFWSBhcyBzdHJpbmcsXG4gICAgICAgIHdlYmhvb2tTZWNyZXQ6IHByb2Nlc3MuZW52XG4gICAgICAgICAgLlNUUklQRV9DT05ORUNURURfQUNDT1VOVFNfV0VCSE9PS19TRUNSRVQgYXMgc3RyaW5nLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLmNsaWVudF8gPSBuZXcgU3RyaXBlKHRoaXMuY29uZmlnXy5hcGlLZXksIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGFwaVZlcnNpb246IFwiMjAyNS0wMi0yNC5hY2FjaWFcIixcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVBheW91dCh7XG4gICAgYW1vdW50LFxuICAgIGN1cnJlbmN5LFxuICAgIGFjY291bnRfcmVmZXJlbmNlX2lkLFxuICAgIHRyYW5zYWN0aW9uX2lkLFxuICAgIHNvdXJjZV90cmFuc2FjdGlvbixcbiAgfTogUHJvY2Vzc1BheW91dElucHV0KTogUHJvbWlzZTxQcm9jZXNzUGF5b3V0UmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5sb2dnZXJfLmluZm8oXG4gICAgICAgIGBQcm9jZXNzaW5nIHBheW91dCBmb3IgdHJhbnNhY3Rpb24gd2l0aCBJRCAke3RyYW5zYWN0aW9uX2lkfWBcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHRyYW5zZmVyID0gYXdhaXQgdGhpcy5jbGllbnRfLnRyYW5zZmVycy5jcmVhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBjdXJyZW5jeSxcbiAgICAgICAgICBkZXN0aW5hdGlvbjogYWNjb3VudF9yZWZlcmVuY2VfaWQsXG4gICAgICAgICAgYW1vdW50OiBnZXRTbWFsbGVzdFVuaXQoYW1vdW50LCBjdXJyZW5jeSksXG4gICAgICAgICAgc291cmNlX3RyYW5zYWN0aW9uLFxuICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbl9pZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7IGlkZW1wb3RlbmN5S2V5OiB0cmFuc2FjdGlvbl9pZCB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiB0cmFuc2ZlciBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5sb2dnZXJfLmVycm9yKFwiRXJyb3Igb2NjdXJlZCB3aGlsZSBjcmVhdGluZyBwYXlvdXRcIiwgZXJyb3IpO1xuXG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3I/Lm1lc3NhZ2UgPz8gXCJFcnJvciBvY2N1cmVkIHdoaWxlIGNyZWF0aW5nIHBheW91dFwiO1xuXG4gICAgICB0aHJvdyBuZXcgTWVkdXNhRXJyb3IoTWVkdXNhRXJyb3IuVHlwZXMuVU5FWFBFQ1RFRF9TVEFURSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY3JlYXRlUGF5b3V0QWNjb3VudCh7XG4gICAgY29udGV4dCxcbiAgICBhY2NvdW50X2lkLFxuICB9OiBDcmVhdGVQYXlvdXRBY2NvdW50SW5wdXQpOiBQcm9taXNlPENyZWF0ZVBheW91dEFjY291bnRSZXNwb25zZT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGNvdW50cnkgfSA9IGNvbnRleHQ7XG4gICAgICB0aGlzLmxvZ2dlcl8uaW5mbyhcIkNyZWF0aW5nIHBheW1lbnQgcHJvZmlsZVwiKTtcblxuICAgICAgaWYgKCFpc1ByZXNlbnQoY291bnRyeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IE1lZHVzYUVycm9yKFxuICAgICAgICAgIE1lZHVzYUVycm9yLlR5cGVzLklOVkFMSURfREFUQSxcbiAgICAgICAgICBgXCJjb3VudHJ5XCIgaXMgcmVxdWlyZWRgXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmNsaWVudF8uYWNjb3VudHMuY3JlYXRlKHtcbiAgICAgICAgY291bnRyeTogY291bnRyeSBhcyBzdHJpbmcsXG4gICAgICAgIHR5cGU6IFwic3RhbmRhcmRcIixcbiAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICBhY2NvdW50X2lkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IGFjY291bnQgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICAgICAgaWQ6IGFjY291bnQuaWQsXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICAgZXJyb3I/Lm1lc3NhZ2UgPz8gXCJFcnJvciBvY2N1cmVkIHdoaWxlIGNyZWF0aW5nIHBheW91dCBhY2NvdW50XCI7XG4gICAgICB0aHJvdyBuZXcgTWVkdXNhRXJyb3IoTWVkdXNhRXJyb3IuVHlwZXMuVU5FWFBFQ1RFRF9TVEFURSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZU9uYm9hcmRpbmcoXG4gICAgYWNjb3VudElkOiBzdHJpbmcsXG4gICAgY29udGV4dDogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgKTogUHJvbWlzZTxJbml0aWFsaXplT25ib2FyZGluZ1Jlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMubG9nZ2VyXy5pbmZvKFwiSW5pdGlhbGl6aW5nIG9uYm9hcmRpbmdcIik7XG5cbiAgICAgIGlmICghaXNQcmVzZW50KGNvbnRleHQucmVmcmVzaF91cmwpKSB7XG4gICAgICAgIHRocm93IG5ldyBNZWR1c2FFcnJvcihcbiAgICAgICAgICBNZWR1c2FFcnJvci5UeXBlcy5JTlZBTElEX0RBVEEsXG4gICAgICAgICAgYCdyZWZyZXNoX3VybCcgaXMgcmVxdWlyZWRgXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNQcmVzZW50KGNvbnRleHQucmV0dXJuX3VybCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IE1lZHVzYUVycm9yKFxuICAgICAgICAgIE1lZHVzYUVycm9yLlR5cGVzLklOVkFMSURfREFUQSxcbiAgICAgICAgICBgJ3JldHVybl91cmwnIGlzIHJlcXVpcmVkYFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY2NvdW50TGluayA9IGF3YWl0IHRoaXMuY2xpZW50Xy5hY2NvdW50TGlua3MuY3JlYXRlKHtcbiAgICAgICAgYWNjb3VudDogYWNjb3VudElkLFxuICAgICAgICByZWZyZXNoX3VybDogY29udGV4dC5yZWZyZXNoX3VybCBhcyBzdHJpbmcsXG4gICAgICAgIHJldHVybl91cmw6IGNvbnRleHQucmV0dXJuX3VybCBhcyBzdHJpbmcsXG4gICAgICAgIHR5cGU6IFwiYWNjb3VudF9vbmJvYXJkaW5nXCIsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogYWNjb3VudExpbmsgYXMgdW5rbm93biBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgICBlcnJvcj8ubWVzc2FnZSA/PyBcIkVycm9yIG9jY3VyZWQgd2hpbGUgaW5pdGlhbGl6aW5nIG9uYm9hcmRpbmdcIjtcbiAgICAgIHRocm93IG5ldyBNZWR1c2FFcnJvcihNZWR1c2FFcnJvci5UeXBlcy5VTkVYUEVDVEVEX1NUQVRFLCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRBY2NvdW50KGFjY291bnRJZDogc3RyaW5nKTogUHJvbWlzZTxTdHJpcGUuQWNjb3VudD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5jbGllbnRfLmFjY291bnRzLnJldHJpZXZlKGFjY291bnRJZCk7XG4gICAgICByZXR1cm4gYWNjb3VudDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yPy5tZXNzYWdlID8/IFwiRXJyb3Igb2NjdXJlZCB3aGlsZSBnZXR0aW5nIGFjY291bnRcIjtcbiAgICAgIHRocm93IG5ldyBNZWR1c2FFcnJvcihNZWR1c2FFcnJvci5UeXBlcy5VTkVYUEVDVEVEX1NUQVRFLCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyByZXZlcnNlUGF5b3V0KGlucHV0OiBSZXZlcnNlUGF5b3V0SW5wdXQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmV2ZXJzYWwgPSBhd2FpdCB0aGlzLmNsaWVudF8udHJhbnNmZXJzLmNyZWF0ZVJldmVyc2FsKFxuICAgICAgICBpbnB1dC50cmFuc2Zlcl9pZCxcbiAgICAgICAge1xuICAgICAgICAgIGFtb3VudDogZ2V0U21hbGxlc3RVbml0KGlucHV0LmFtb3VudCwgaW5wdXQuY3VycmVuY3kpLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4gcmV2ZXJzYWw7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvcj8ubWVzc2FnZSA/PyBcIkVycm9yIG9jY3VyZWQgd2hpbGUgcmV2ZXJzaW5nIHBheW91dFwiO1xuICAgICAgdGhyb3cgbmV3IE1lZHVzYUVycm9yKE1lZHVzYUVycm9yLlR5cGVzLlVORVhQRUNURURfU1RBVEUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFdlYmhvb2tBY3Rpb25BbmREYXRhKHBheWxvYWQ6IFBheW91dFdlYmhvb2tBY3Rpb25QYXlsb2FkKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gcGF5bG9hZC5oZWFkZXJzW1wic3RyaXBlLXNpZ25hdHVyZVwiXSBhcyBzdHJpbmc7XG5cbiAgICBjb25zdCBldmVudCA9IHRoaXMuY2xpZW50Xy53ZWJob29rcy5jb25zdHJ1Y3RFdmVudChcbiAgICAgIHBheWxvYWQucmF3RGF0YSBhcyBzdHJpbmcgfCBCdWZmZXIsXG4gICAgICBzaWduYXR1cmUsXG4gICAgICB0aGlzLmNvbmZpZ18ud2ViaG9va1NlY3JldFxuICAgICk7XG5cbiAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YS5vYmplY3QgYXMgU3RyaXBlLkFjY291bnQ7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhY2NvdW50LnVwZGF0ZWRcIjpcbiAgICAgICAgLy8gaGVyZSB5b3UgY2FuIHZhbGlkYXRlIGFjY291bnQgZGF0YSB0byBtYWtlIHN1cmUgaXQncyB2YWxpZFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGFjdGlvbjogUGF5b3V0V2ViaG9va0FjdGlvbi5BQ0NPVU5UX0FVVEhPUklaRUQsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgYWNjb3VudF9pZDogZGF0YS5tZXRhZGF0YT8uYWNjb3VudF9pZCBhcyBzdHJpbmcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgTWVkdXNhRXJyb3IoXG4gICAgICBNZWR1c2FFcnJvci5UeXBlcy5VTkVYUEVDVEVEX1NUQVRFLFxuICAgICAgYFVuc3VwcG9ydGVkIGV2ZW50IHR5cGU6ICR7ZXZlbnQudHlwZX1gXG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBheW91dFByb3ZpZGVyIiwiY3JlYXRlUGF5b3V0IiwiYW1vdW50IiwiY3VycmVuY3kiLCJhY2NvdW50X3JlZmVyZW5jZV9pZCIsInRyYW5zYWN0aW9uX2lkIiwic291cmNlX3RyYW5zYWN0aW9uIiwibG9nZ2VyXyIsImluZm8iLCJ0cmFuc2ZlciIsImNsaWVudF8iLCJ0cmFuc2ZlcnMiLCJjcmVhdGUiLCJkZXN0aW5hdGlvbiIsImdldFNtYWxsZXN0VW5pdCIsIm1ldGFkYXRhIiwiaWRlbXBvdGVuY3lLZXkiLCJkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIiwiTWVkdXNhRXJyb3IiLCJUeXBlcyIsIlVORVhQRUNURURfU1RBVEUiLCJjcmVhdGVQYXlvdXRBY2NvdW50IiwiY29udGV4dCIsImFjY291bnRfaWQiLCJjb3VudHJ5IiwiaXNQcmVzZW50IiwiSU5WQUxJRF9EQVRBIiwiYWNjb3VudCIsImFjY291bnRzIiwidHlwZSIsImlkIiwiaW5pdGlhbGl6ZU9uYm9hcmRpbmciLCJhY2NvdW50SWQiLCJyZWZyZXNoX3VybCIsInJldHVybl91cmwiLCJhY2NvdW50TGluayIsImFjY291bnRMaW5rcyIsImdldEFjY291bnQiLCJyZXRyaWV2ZSIsInJldmVyc2VQYXlvdXQiLCJpbnB1dCIsInJldmVyc2FsIiwiY3JlYXRlUmV2ZXJzYWwiLCJ0cmFuc2Zlcl9pZCIsImdldFdlYmhvb2tBY3Rpb25BbmREYXRhIiwicGF5bG9hZCIsInNpZ25hdHVyZSIsImhlYWRlcnMiLCJldmVudCIsIndlYmhvb2tzIiwiY29uc3RydWN0RXZlbnQiLCJyYXdEYXRhIiwiY29uZmlnXyIsIndlYmhvb2tTZWNyZXQiLCJvYmplY3QiLCJhY3Rpb24iLCJQYXlvdXRXZWJob29rQWN0aW9uIiwiQUNDT1VOVF9BVVRIT1JJWkVEIiwiY29uc3RydWN0b3IiLCJsb2dnZXIiLCJjb25maWdNb2R1bGUiLCJtb2R1bGVEZWYiLCJtb2R1bGVzIiwiUEFZT1VUX01PRFVMRSIsIm9wdGlvbnMiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9BUElfS0VZIiwiU1RSSVBFX0NPTk5FQ1RFRF9BQ0NPVU5UU19XRUJIT09LX1NFQ1JFVCIsIlN0cmlwZSIsImFwaVZlcnNpb24iXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBOEJhQTs7O2VBQUFBOzs7K0RBOUJNO3VCQUdvQjtrQkFFVDsyQkFhdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxJQUFBLEFBQU1BLGlCQUFOLE1BQU1BO0lBdUJYLE1BQU1DLGFBQWEsRUFDakJDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxvQkFBb0IsRUFDcEJDLGNBQWMsRUFDZEMsa0JBQWtCLEVBQ0MsRUFBa0M7UUFDckQsSUFBSTtZQUNGLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQ2YsQ0FBQywwQ0FBMEMsRUFBRUgsZUFBZSxDQUFDO1lBRy9ELE1BQU1JLFdBQVcsTUFBTSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQ2xEO2dCQUNFVDtnQkFDQVUsYUFBYVQ7Z0JBQ2JGLFFBQVFZLElBQUFBLDBCQUFlLEVBQUNaLFFBQVFDO2dCQUNoQ0c7Z0JBQ0FTLFVBQVU7b0JBQ1JWO2dCQUNGO1lBQ0YsR0FDQTtnQkFBRVcsZ0JBQWdCWDtZQUFlO1lBR25DLE9BQU87Z0JBQ0xZLE1BQU1SO1lBQ1I7UUFDRixFQUFFLE9BQU9TLE9BQU87WUFDZCxJQUFJLENBQUNYLE9BQU8sQ0FBQ1csS0FBSyxDQUFDLHVDQUF1Q0E7WUFFMUQsTUFBTUMsVUFBVUQsT0FBT0MsV0FBVztZQUVsQyxNQUFNLElBQUlDLGtCQUFXLENBQUNBLGtCQUFXLENBQUNDLEtBQUssQ0FBQ0MsZ0JBQWdCLEVBQUVIO1FBQzVE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