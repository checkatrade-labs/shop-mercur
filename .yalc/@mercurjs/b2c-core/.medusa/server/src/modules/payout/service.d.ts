import { EntityManager } from "@mikro-orm/knex";
import { Context } from "@medusajs/framework/types";
import { CreateOnboardingDTO, CreatePayoutAccountDTO, CreatePayoutDTO, CreatePayoutReversalDTO, IPayoutProvider, PayoutAccountStatus, PayoutWebhookActionPayload } from "@mercurjs/framework";
type InjectedDependencies = {
    payoutProvider: IPayoutProvider;
};
declare const PayoutModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly Payout: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        currency_code: import("@medusajs/framework/utils").TextProperty;
        amount: import("@medusajs/framework/utils").BigNumberProperty;
        data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        payout_account: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            status: import("@medusajs/framework/utils").EnumProperty<typeof PayoutAccountStatus>;
            reference_id: import("@medusajs/framework/utils").TextProperty;
            data: import("@medusajs/framework/utils").JSONProperty;
            context: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            onboarding: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                context: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                payout_account: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout_account">, undefined>;
            }>, "onboarding">, import("@medusajs/framework/utils").HasOne<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                context: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                payout_account: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout_account">, undefined>;
            }>, "onboarding">>, false>;
            payouts: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout">>;
        }>, "payout_account">, undefined>;
        reversals: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            currency_code: import("@medusajs/framework/utils").TextProperty;
            amount: import("@medusajs/framework/utils").BigNumberProperty;
            data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            payout: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout">, undefined>;
        }>, "payout_reversal">>;
    }>, "payout">;
    readonly PayoutReversal: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        currency_code: import("@medusajs/framework/utils").TextProperty;
        amount: import("@medusajs/framework/utils").BigNumberProperty;
        data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        payout: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            currency_code: import("@medusajs/framework/utils").TextProperty;
            amount: import("@medusajs/framework/utils").BigNumberProperty;
            data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            payout_account: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                status: import("@medusajs/framework/utils").EnumProperty<typeof PayoutAccountStatus>;
                reference_id: import("@medusajs/framework/utils").TextProperty;
                data: import("@medusajs/framework/utils").JSONProperty;
                context: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                onboarding: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                    data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                    context: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                    payout_account: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout_account">, undefined>;
                }>, "onboarding">, import("@medusajs/framework/utils").HasOne<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                    data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                    context: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                    payout_account: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout_account">, undefined>;
                }>, "onboarding">>, false>;
                payouts: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout">>;
            }>, "payout_account">, undefined>;
            reversals: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout_reversal">>;
        }>, "payout">, undefined>;
    }>, "payout_reversal">;
    readonly PayoutAccount: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        status: import("@medusajs/framework/utils").EnumProperty<typeof PayoutAccountStatus>;
        reference_id: import("@medusajs/framework/utils").TextProperty;
        data: import("@medusajs/framework/utils").JSONProperty;
        context: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        onboarding: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            context: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            payout_account: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout_account">, undefined>;
        }>, "onboarding">, import("@medusajs/framework/utils").HasOne<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            context: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            payout_account: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout_account">, undefined>;
        }>, "onboarding">>, false>;
        payouts: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            currency_code: import("@medusajs/framework/utils").TextProperty;
            amount: import("@medusajs/framework/utils").BigNumberProperty;
            data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            payout_account: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout_account">, undefined>;
            reversals: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                currency_code: import("@medusajs/framework/utils").TextProperty;
                amount: import("@medusajs/framework/utils").BigNumberProperty;
                data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                payout: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout">, undefined>;
            }>, "payout_reversal">>;
        }>, "payout">>;
    }>, "payout_account">;
    readonly Onboarding: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        context: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
        payout_account: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            status: import("@medusajs/framework/utils").EnumProperty<typeof PayoutAccountStatus>;
            reference_id: import("@medusajs/framework/utils").TextProperty;
            data: import("@medusajs/framework/utils").JSONProperty;
            context: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
            onboarding: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "onboarding">, import("@medusajs/framework/utils").HasOne<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "onboarding">>, false>;
            payouts: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                currency_code: import("@medusajs/framework/utils").TextProperty;
                amount: import("@medusajs/framework/utils").BigNumberProperty;
                data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                payout_account: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout_account">, undefined>;
                reversals: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                    currency_code: import("@medusajs/framework/utils").TextProperty;
                    amount: import("@medusajs/framework/utils").BigNumberProperty;
                    data: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
                    payout: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "payout">, undefined>;
                }>, "payout_reversal">>;
            }>, "payout">>;
        }>, "payout_account">, undefined>;
    }>, "onboarding">;
}>>;
declare class PayoutModuleService extends PayoutModuleService_base {
    protected provider_: IPayoutProvider;
    constructor({ payoutProvider }: InjectedDependencies);
    createPayoutAccount({ context }: CreatePayoutAccountDTO, sharedContext?: Context<EntityManager>): Promise<{
        id: string;
        status: PayoutAccountStatus;
        reference_id: string;
        data: Record<string, unknown>;
        context: Record<string, unknown> | null;
        onboarding: {
            id: string;
            data: Record<string, unknown> | null;
            context: Record<string, unknown> | null;
            payout_account: /*elided*/ any;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            payout_account_id: string;
        };
        payouts: {
            id: string;
            currency_code: string;
            amount: number;
            data: Record<string, unknown> | null;
            payout_account: /*elided*/ any;
            reversals: {
                id: string;
                currency_code: string;
                amount: number;
                data: Record<string, unknown> | null;
                payout: /*elided*/ any;
                raw_amount: Record<string, unknown>;
                created_at: Date;
                updated_at: Date;
                deleted_at: Date | null;
                payout_id: string;
            }[];
            raw_amount: Record<string, unknown>;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            payout_account_id: string;
        }[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
    syncStripeAccount(account_id: string, sharedContext?: Context<EntityManager>): Promise<{
        id: string;
        status: PayoutAccountStatus;
        reference_id: string;
        data: Record<string, unknown>;
        context: Record<string, unknown> | null;
        onboarding: {
            id: string;
            data: Record<string, unknown> | null;
            context: Record<string, unknown> | null;
            payout_account: /*elided*/ any;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            payout_account_id: string;
        };
        payouts: {
            id: string;
            currency_code: string;
            amount: number;
            data: Record<string, unknown> | null;
            payout_account: /*elided*/ any;
            reversals: {
                id: string;
                currency_code: string;
                amount: number;
                data: Record<string, unknown> | null;
                payout: /*elided*/ any;
                raw_amount: Record<string, unknown>;
                created_at: Date;
                updated_at: Date;
                deleted_at: Date | null;
                payout_id: string;
            }[];
            raw_amount: Record<string, unknown>;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            payout_account_id: string;
        }[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
    }>;
    initializeOnboarding({ context, payout_account_id }: CreateOnboardingDTO, sharedContext?: Context<EntityManager>): Promise<{
        id: string;
        data: Record<string, unknown> | null;
        context: Record<string, unknown> | null;
        payout_account: {
            id: string;
            status: PayoutAccountStatus;
            reference_id: string;
            data: Record<string, unknown>;
            context: Record<string, unknown> | null;
            onboarding: /*elided*/ any;
            payouts: {
                id: string;
                currency_code: string;
                amount: number;
                data: Record<string, unknown> | null;
                payout_account: /*elided*/ any;
                reversals: {
                    id: string;
                    currency_code: string;
                    amount: number;
                    data: Record<string, unknown> | null;
                    payout: /*elided*/ any;
                    raw_amount: Record<string, unknown>;
                    created_at: Date;
                    updated_at: Date;
                    deleted_at: Date | null;
                    payout_id: string;
                }[];
                raw_amount: Record<string, unknown>;
                created_at: Date;
                updated_at: Date;
                deleted_at: Date | null;
                payout_account_id: string;
            }[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
        };
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        payout_account_id: string;
    }>;
    createPayout(input: CreatePayoutDTO, sharedContext?: Context<EntityManager>): Promise<{
        id: string;
        currency_code: string;
        amount: number;
        data: Record<string, unknown> | null;
        payout_account: {
            id: string;
            status: PayoutAccountStatus;
            reference_id: string;
            data: Record<string, unknown>;
            context: Record<string, unknown> | null;
            onboarding: {
                id: string;
                data: Record<string, unknown> | null;
                context: Record<string, unknown> | null;
                payout_account: /*elided*/ any;
                created_at: Date;
                updated_at: Date;
                deleted_at: Date | null;
                payout_account_id: string;
            };
            payouts: /*elided*/ any[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
        };
        reversals: {
            id: string;
            currency_code: string;
            amount: number;
            data: Record<string, unknown> | null;
            payout: /*elided*/ any;
            raw_amount: Record<string, unknown>;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            payout_id: string;
        }[];
        raw_amount: Record<string, unknown>;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        payout_account_id: string;
    } & {
        id: string;
        currency_code: string;
        amount: number;
        data: Record<string, unknown> | null;
        payout_account: {
            id: string;
            status: PayoutAccountStatus;
            reference_id: string;
            data: Record<string, unknown>;
            context: Record<string, unknown> | null;
            onboarding: {
                id: string;
                data: Record<string, unknown> | null;
                context: Record<string, unknown> | null;
                payout_account: /*elided*/ any;
                created_at: Date;
                updated_at: Date;
                deleted_at: Date | null;
                payout_account_id: string;
            };
            payouts: /*elided*/ any[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
        };
        reversals: {
            id: string;
            currency_code: string;
            amount: number;
            data: Record<string, unknown> | null;
            payout: /*elided*/ any;
            raw_amount: Record<string, unknown>;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            payout_id: string;
        }[];
        raw_amount: Record<string, unknown>;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        payout_account_id: string;
    }[]>;
    createPayoutReversal(input: CreatePayoutReversalDTO, sharedContext?: Context<EntityManager>): Promise<{
        id: string;
        currency_code: string;
        amount: number;
        data: Record<string, unknown> | null;
        payout: {
            id: string;
            currency_code: string;
            amount: number;
            data: Record<string, unknown> | null;
            payout_account: {
                id: string;
                status: PayoutAccountStatus;
                reference_id: string;
                data: Record<string, unknown>;
                context: Record<string, unknown> | null;
                onboarding: {
                    id: string;
                    data: Record<string, unknown> | null;
                    context: Record<string, unknown> | null;
                    payout_account: /*elided*/ any;
                    created_at: Date;
                    updated_at: Date;
                    deleted_at: Date | null;
                    payout_account_id: string;
                };
                payouts: /*elided*/ any[];
                created_at: Date;
                updated_at: Date;
                deleted_at: Date | null;
            };
            reversals: /*elided*/ any[];
            raw_amount: Record<string, unknown>;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            payout_account_id: string;
        };
        raw_amount: Record<string, unknown>;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        payout_id: string;
    } & {
        id: string;
        currency_code: string;
        amount: number;
        data: Record<string, unknown> | null;
        payout: {
            id: string;
            currency_code: string;
            amount: number;
            data: Record<string, unknown> | null;
            payout_account: {
                id: string;
                status: PayoutAccountStatus;
                reference_id: string;
                data: Record<string, unknown>;
                context: Record<string, unknown> | null;
                onboarding: {
                    id: string;
                    data: Record<string, unknown> | null;
                    context: Record<string, unknown> | null;
                    payout_account: /*elided*/ any;
                    created_at: Date;
                    updated_at: Date;
                    deleted_at: Date | null;
                    payout_account_id: string;
                };
                payouts: /*elided*/ any[];
                created_at: Date;
                updated_at: Date;
                deleted_at: Date | null;
            };
            reversals: /*elided*/ any[];
            raw_amount: Record<string, unknown>;
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
            payout_account_id: string;
        };
        raw_amount: Record<string, unknown>;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        payout_id: string;
    }[]>;
    getWebhookActionAndData(input: PayoutWebhookActionPayload): Promise<import("@mercurjs/framework").PayoutWebhookActionAndDataResponse>;
}
export default PayoutModuleService;
