import { ShippingOptionDTO } from '@medusajs/framework/types';
export declare const filterSellerShippingOptionsStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    shipping_options: ShippingOptionDTO[];
    cart_id: string;
}, {
    seller_name: any;
    seller_id: any;
    id: string;
    name: string;
    price_type: import("@medusajs/framework/types").ShippingOptionPriceType;
    service_zone_id: string;
    shipping_profile_id: string;
    provider_id: string;
    shipping_option_type_id: string | null;
    data: Record<string, unknown> | null;
    metadata: Record<string, unknown> | null;
    service_zone: import("@medusajs/framework/types").ServiceZoneDTO;
    shipping_profile: import("@medusajs/framework/types").ShippingProfileDTO;
    fulfillment_provider: import("@medusajs/framework/types").FulfillmentProviderDTO;
    type: import("@medusajs/framework/types").ShippingOptionTypeDTO;
    rules: import("@medusajs/framework/types").ShippingOptionRuleDTO[];
    fulfillments: import("@medusajs/framework/types").FulfillmentDTO[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}[]>;
