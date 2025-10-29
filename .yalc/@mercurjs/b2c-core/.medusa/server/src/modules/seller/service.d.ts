import { ConfigModule } from "@medusajs/framework";
import { Context, CreateInviteDTO } from "@medusajs/framework/types";
import { MemberInviteDTO } from "@mercurjs/framework";
type InjectedDependencies = {
    configModule: ConfigModule;
};
declare const SellerModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly MemberInvite: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        email: import("@medusajs/framework/utils").TextProperty;
        role: import("@medusajs/framework/utils").EnumProperty<typeof import("@mercurjs/framework").MemberRole>;
        seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            store_status: import("@medusajs/framework/utils").EnumProperty<typeof import("@mercurjs/framework").StoreStatus>;
            name: import("@medusajs/framework/utils").TextProperty;
            handle: import("@medusajs/framework/utils").TextProperty;
            description: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            photo: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            email: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            phone: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            address_line: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            city: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            state: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            postal_code: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            country_code: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            tax_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            members: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                role: import("@medusajs/framework/utils").EnumProperty<typeof import("@mercurjs/framework").MemberRole>;
                name: import("@medusajs/framework/utils").TextProperty;
                email: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
                bio: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
                phone: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
                photo: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
                seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller">, undefined>;
            }>, "member">>;
            invites: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "member_invite">>;
            onboarding: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                store_information: import("@medusajs/framework/utils").BooleanProperty;
                stripe_connection: import("@medusajs/framework/utils").BooleanProperty;
                locations_shipping: import("@medusajs/framework/utils").BooleanProperty;
                products: import("@medusajs/framework/utils").BooleanProperty;
                seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller">, undefined>;
            }>, "seller_onboarding">, import("@medusajs/framework/utils").HasOne<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                store_information: import("@medusajs/framework/utils").BooleanProperty;
                stripe_connection: import("@medusajs/framework/utils").BooleanProperty;
                locations_shipping: import("@medusajs/framework/utils").BooleanProperty;
                products: import("@medusajs/framework/utils").BooleanProperty;
                seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller">, undefined>;
            }>, "seller_onboarding">>, false>;
        }>, "seller">, undefined>;
        token: import("@medusajs/framework/utils").TextProperty;
        expires_at: import("@medusajs/framework/utils").DateTimeProperty;
        accepted: import("@medusajs/framework/utils").BooleanProperty;
    }>, "member_invite">;
    readonly Member: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        role: import("@medusajs/framework/utils").EnumProperty<typeof import("@mercurjs/framework").MemberRole>;
        name: import("@medusajs/framework/utils").TextProperty;
        email: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        bio: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        phone: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        photo: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            store_status: import("@medusajs/framework/utils").EnumProperty<typeof import("@mercurjs/framework").StoreStatus>;
            name: import("@medusajs/framework/utils").TextProperty;
            handle: import("@medusajs/framework/utils").TextProperty;
            description: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            photo: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            email: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            phone: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            address_line: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            city: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            state: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            postal_code: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            country_code: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            tax_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            members: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "member">>;
            invites: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                email: import("@medusajs/framework/utils").TextProperty;
                role: import("@medusajs/framework/utils").EnumProperty<typeof import("@mercurjs/framework").MemberRole>;
                seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller">, undefined>;
                token: import("@medusajs/framework/utils").TextProperty;
                expires_at: import("@medusajs/framework/utils").DateTimeProperty;
                accepted: import("@medusajs/framework/utils").BooleanProperty;
            }>, "member_invite">>;
            onboarding: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                store_information: import("@medusajs/framework/utils").BooleanProperty;
                stripe_connection: import("@medusajs/framework/utils").BooleanProperty;
                locations_shipping: import("@medusajs/framework/utils").BooleanProperty;
                products: import("@medusajs/framework/utils").BooleanProperty;
                seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller">, undefined>;
            }>, "seller_onboarding">, import("@medusajs/framework/utils").HasOne<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                store_information: import("@medusajs/framework/utils").BooleanProperty;
                stripe_connection: import("@medusajs/framework/utils").BooleanProperty;
                locations_shipping: import("@medusajs/framework/utils").BooleanProperty;
                products: import("@medusajs/framework/utils").BooleanProperty;
                seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller">, undefined>;
            }>, "seller_onboarding">>, false>;
        }>, "seller">, undefined>;
    }>, "member">;
    readonly Seller: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        store_status: import("@medusajs/framework/utils").EnumProperty<typeof import("@mercurjs/framework").StoreStatus>;
        name: import("@medusajs/framework/utils").TextProperty;
        handle: import("@medusajs/framework/utils").TextProperty;
        description: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        photo: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        email: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        phone: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        address_line: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        city: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        state: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        postal_code: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        country_code: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        tax_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        members: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            role: import("@medusajs/framework/utils").EnumProperty<typeof import("@mercurjs/framework").MemberRole>;
            name: import("@medusajs/framework/utils").TextProperty;
            email: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            bio: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            phone: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            photo: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller">, undefined>;
        }>, "member">>;
        invites: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            email: import("@medusajs/framework/utils").TextProperty;
            role: import("@medusajs/framework/utils").EnumProperty<typeof import("@mercurjs/framework").MemberRole>;
            seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller">, undefined>;
            token: import("@medusajs/framework/utils").TextProperty;
            expires_at: import("@medusajs/framework/utils").DateTimeProperty;
            accepted: import("@medusajs/framework/utils").BooleanProperty;
        }>, "member_invite">>;
        onboarding: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            store_information: import("@medusajs/framework/utils").BooleanProperty;
            stripe_connection: import("@medusajs/framework/utils").BooleanProperty;
            locations_shipping: import("@medusajs/framework/utils").BooleanProperty;
            products: import("@medusajs/framework/utils").BooleanProperty;
            seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller">, undefined>;
        }>, "seller_onboarding">, import("@medusajs/framework/utils").HasOne<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            store_information: import("@medusajs/framework/utils").BooleanProperty;
            stripe_connection: import("@medusajs/framework/utils").BooleanProperty;
            locations_shipping: import("@medusajs/framework/utils").BooleanProperty;
            products: import("@medusajs/framework/utils").BooleanProperty;
            seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller">, undefined>;
        }>, "seller_onboarding">>, false>;
    }>, "seller">;
    readonly SellerOnboarding: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        store_information: import("@medusajs/framework/utils").BooleanProperty;
        stripe_connection: import("@medusajs/framework/utils").BooleanProperty;
        locations_shipping: import("@medusajs/framework/utils").BooleanProperty;
        products: import("@medusajs/framework/utils").BooleanProperty;
        seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            store_status: import("@medusajs/framework/utils").EnumProperty<typeof import("@mercurjs/framework").StoreStatus>;
            name: import("@medusajs/framework/utils").TextProperty;
            handle: import("@medusajs/framework/utils").TextProperty;
            description: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            photo: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            email: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            phone: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            address_line: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            city: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            state: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            postal_code: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            country_code: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            tax_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
            members: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                role: import("@medusajs/framework/utils").EnumProperty<typeof import("@mercurjs/framework").MemberRole>;
                name: import("@medusajs/framework/utils").TextProperty;
                email: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
                bio: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
                phone: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
                photo: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
                seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller">, undefined>;
            }>, "member">>;
            invites: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
                id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
                email: import("@medusajs/framework/utils").TextProperty;
                role: import("@medusajs/framework/utils").EnumProperty<typeof import("@mercurjs/framework").MemberRole>;
                seller: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller">, undefined>;
                token: import("@medusajs/framework/utils").TextProperty;
                expires_at: import("@medusajs/framework/utils").DateTimeProperty;
                accepted: import("@medusajs/framework/utils").BooleanProperty;
            }>, "member_invite">>;
            onboarding: import("@medusajs/framework/utils").RelationNullableModifier<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller_onboarding">, import("@medusajs/framework/utils").HasOne<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "seller_onboarding">>, false>;
        }>, "seller">, undefined>;
    }>, "seller_onboarding">;
}>>;
declare class SellerModuleService extends SellerModuleService_base {
    private readonly config_;
    private readonly httpConfig_;
    constructor({ configModule }: InjectedDependencies);
    validateInviteToken(token: string): Promise<{
        id: string;
        email: string;
        role: import("@mercurjs/framework").MemberRole;
        seller: {
            id: string;
            store_status: import("@mercurjs/framework").StoreStatus;
            name: string;
            handle: string;
            description: string | null;
            photo: string | null;
            email: string | null;
            phone: string | null;
            address_line: string | null;
            city: string | null;
            state: string | null;
            postal_code: string | null;
            country_code: string | null;
            tax_id: string | null;
            members: {
                id: string;
                role: import("@mercurjs/framework").MemberRole;
                name: string;
                email: string | null;
                bio: string | null;
                phone: string | null;
                photo: string | null;
                seller: /*elided*/ any;
                created_at: Date;
                updated_at: Date;
                deleted_at: Date | null;
                seller_id: string;
            }[];
            invites: /*elided*/ any[];
            onboarding: {
                id: string;
                store_information: boolean;
                stripe_connection: boolean;
                locations_shipping: boolean;
                products: boolean;
                seller: /*elided*/ any;
                created_at: Date;
                updated_at: Date;
                deleted_at: Date | null;
                seller_id: string;
            };
            created_at: Date;
            updated_at: Date;
            deleted_at: Date | null;
        };
        token: string;
        expires_at: Date;
        accepted: boolean;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date | null;
        seller_id: string;
    }>;
    createMemberInvites(input: CreateInviteDTO | CreateInviteDTO[], sharedContext?: Context): Promise<MemberInviteDTO[]>;
    private generateToken;
    isOnboardingCompleted(seller_id: string): Promise<boolean>;
}
export default SellerModuleService;
