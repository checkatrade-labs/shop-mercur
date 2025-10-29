import { CartLineItemDTO } from '@medusajs/framework/types';
type LineItemWithProductId = Pick<CartLineItemDTO, 'product_id'>;
export declare const validateCartSellersStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    line_items: LineItemWithProductId[];
}, unknown>;
export {};
