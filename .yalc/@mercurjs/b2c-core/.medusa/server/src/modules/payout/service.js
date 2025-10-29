"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const models_1 = require("./models");
const framework_1 = require("@mercurjs/framework");
class PayoutModuleService extends (0, utils_1.MedusaService)({
    Payout: models_1.Payout,
    PayoutReversal: models_1.PayoutReversal,
    PayoutAccount: models_1.PayoutAccount,
    Onboarding: models_1.Onboarding,
}) {
    constructor({ payoutProvider }) {
        super(...arguments);
        this.provider_ = payoutProvider;
    }
    async createPayoutAccount({ context }, sharedContext) {
        const result = await this.createPayoutAccounts({ context, reference_id: "placeholder", data: {} }, sharedContext);
        try {
            const { data, id: referenceId } = await this.provider_.createPayoutAccount({
                context,
                account_id: result.id,
            });
            await this.updatePayoutAccounts({
                id: result.id,
                data,
                reference_id: referenceId,
            }, sharedContext);
            const updated = await this.retrievePayoutAccount(result.id, undefined, sharedContext);
            return updated;
        }
        catch (error) {
            await this.deletePayoutAccounts(result.id, sharedContext);
            throw error;
        }
    }
    async syncStripeAccount(account_id, sharedContext) {
        const payout_account = await this.retrievePayoutAccount(account_id);
        const stripe_account = await this.provider_.getAccount(payout_account.reference_id);
        const status = stripe_account.details_submitted &&
            stripe_account.payouts_enabled &&
            stripe_account.charges_enabled &&
            stripe_account.tos_acceptance &&
            stripe_account.tos_acceptance?.date !== null;
        await this.updatePayoutAccounts({
            id: account_id,
            data: stripe_account,
            status: status
                ? framework_1.PayoutAccountStatus.ACTIVE
                : framework_1.PayoutAccountStatus.PENDING,
        }, sharedContext);
        const updated = await this.retrievePayoutAccount(account_id, undefined, sharedContext);
        return updated;
    }
    async initializeOnboarding({ context, payout_account_id }, sharedContext) {
        const [existingOnboarding] = await this.listOnboardings({
            payout_account_id,
        });
        const account = await this.retrievePayoutAccount(payout_account_id);
        const { data: providerData } = await this.provider_.initializeOnboarding(account.reference_id, context);
        let onboarding = existingOnboarding;
        if (!existingOnboarding) {
            onboarding = await super.createOnboardings({
                payout_account_id,
            }, sharedContext);
        }
        await this.updateOnboardings({
            id: onboarding.id,
            data: providerData,
            context,
        }, sharedContext);
        return await this.retrieveOnboarding(onboarding.id, undefined, sharedContext);
    }
    async createPayout(input, sharedContext) {
        const { amount, currency_code, account_id, transaction_id, source_transaction, } = input;
        const payoutAccount = await this.retrievePayoutAccount(account_id);
        const { data } = await this.provider_.createPayout({
            account_reference_id: payoutAccount.reference_id,
            amount,
            currency: currency_code,
            transaction_id,
            source_transaction,
        });
        // @ts-expect-error BigNumber incompatible interface
        const payout = await this.createPayouts({
            data,
            amount,
            currency_code,
            payout_account: payoutAccount.id,
        }, sharedContext);
        return payout;
    }
    async createPayoutReversal(input, sharedContext) {
        const payout = await this.retrievePayout(input.payout_id);
        if (!payout || !payout.data || !payout.data.id) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Payout not found");
        }
        const transfer_id = payout.data.id;
        const transferReversal = await this.provider_.reversePayout({
            transfer_id,
            amount: input.amount,
            currency: input.currency_code,
        });
        // @ts-expect-error BigNumber incompatible interface
        const payoutReversal = await this.createPayoutReversals({
            data: transferReversal,
            amount: input.amount,
            currency_code: input.currency_code,
            payout: payout.id,
        }, sharedContext);
        return payoutReversal;
    }
    async getWebhookActionAndData(input) {
        return await this.provider_.getWebhookActionAndData(input);
    }
}
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayoutModuleService.prototype, "createPayoutAccount", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PayoutModuleService.prototype, "syncStripeAccount", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayoutModuleService.prototype, "initializeOnboarding", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayoutModuleService.prototype, "createPayout", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PayoutModuleService.prototype, "createPayoutReversal", null);
exports.default = PayoutModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BheW91dC9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EscURBS21DO0FBRW5DLHFDQUE2RTtBQUM3RSxtREFRNkI7QUFNN0IsTUFBTSxtQkFBb0IsU0FBUSxJQUFBLHFCQUFhLEVBQUM7SUFDOUMsTUFBTSxFQUFOLGVBQU07SUFDTixjQUFjLEVBQWQsdUJBQWM7SUFDZCxhQUFhLEVBQWIsc0JBQWE7SUFDYixVQUFVLEVBQVYsbUJBQVU7Q0FDWCxDQUFDO0lBR0EsWUFBWSxFQUFFLGNBQWMsRUFBd0I7UUFDbEQsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7SUFDbEMsQ0FBQztJQUdLLEFBQU4sS0FBSyxDQUFDLG1CQUFtQixDQUN2QixFQUFFLE9BQU8sRUFBMEIsRUFDbEIsYUFBc0M7UUFFdkQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQzVDLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUNsRCxhQUFhLENBQ2QsQ0FBQztRQUVGLElBQUksQ0FBQztZQUNILE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxHQUM3QixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3ZDLE9BQU87Z0JBQ1AsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2FBQ3RCLENBQUMsQ0FBQztZQUVMLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUM3QjtnQkFDRSxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ2IsSUFBSTtnQkFDSixZQUFZLEVBQUUsV0FBVzthQUMxQixFQUNELGFBQWEsQ0FDZCxDQUFDO1lBRUYs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