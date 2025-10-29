import PayoutModuleService from "./service";
export declare const PAYOUT_MODULE = "payout";
export { PayoutModuleService };
declare const _default: import("@medusajs/types").ModuleExports<typeof PayoutModuleService> & {
    linkable: {
        readonly payout: {
            id: {
                serviceName: "payout";
                field: "payout";
                linkable: "payout_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "payout";
                field: "payout";
                linkable: "payout_id";
                primaryKey: "id";
            };
        };
        readonly payoutReversal: {
            id: {
                serviceName: "payout";
                field: "payoutReversal";
                linkable: "payout_reversal_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "payout";
                field: "payoutReversal";
                linkable: "payout_reversal_id";
                primaryKey: "id";
            };
        };
        readonly payoutAccount: {
            id: {
                serviceName: "payout";
                field: "payoutAccount";
                linkable: "payout_account_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "payout";
                field: "payoutAccount";
                linkable: "payout_account_id";
                primaryKey: "id";
            };
        };
        readonly onboarding: {
            id: {
                serviceName: "payout";
                field: "onboarding";
                linkable: "onboarding_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "payout";
                field: "onboarding";
                linkable: "onboarding_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
