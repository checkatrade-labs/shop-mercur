import { MemberRole } from "@mercurjs/framework";
export declare const Member: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    role: import("@medusajs/framework/utils").EnumProperty<typeof MemberRole>;
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
            role: import("@medusajs/framework/utils").EnumProperty<typeof MemberRole>;
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
