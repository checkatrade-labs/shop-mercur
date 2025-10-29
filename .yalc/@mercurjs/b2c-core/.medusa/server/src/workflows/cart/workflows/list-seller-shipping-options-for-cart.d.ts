export declare const listSellerShippingOptionsForCartWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<{
    cart_id: string;
    is_return: boolean;
}, {
    seller_name: any;
    seller_id: any;
    id: string;
    name: string;
    price_type: import("@medusajs/types").ShippingOptionPriceType;
    service_zone_id: string;
    shipping_profile_id: string;
    provider_id: string;
    shipping_option_type_id: string | null;
    data: Record<string, unknown> | null;
    metadata: Record<string, unknown> | null;
    service_zone: import("@medusajs/types").ServiceZoneDTO;
    shipping_profile: import("@medusajs/types").ShippingProfileDTO;
    fulfillment_provider: import("@medusajs/types").FulfillmentProviderDTO;
    type: import("@medusajs/types").ShippingOptionTypeDTO;
    rules: import("@medusajs/types").ShippingOptionRuleDTO[];
    fulfillments: import("@medusajs/types").FulfillmentDTO[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}[], []>;
