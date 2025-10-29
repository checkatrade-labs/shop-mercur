import { BigNumberInput, CartLineItemDTO, CreateOrderAdjustmentDTO, CreateOrderLineItemTaxLineDTO, InventoryItemDTO, ProductVariantDTO } from '@medusajs/framework/types';
interface Input {
    item?: CartLineItemDTO;
    quantity: BigNumberInput;
    metadata?: Record<string, unknown> | null;
    unitPrice: BigNumberInput;
    compareAtUnitPrice?: BigNumberInput | null;
    isTaxInclusive?: boolean;
    variant: ProductVariantDTO & {
        inventory_items: {
            inventory: InventoryItemDTO;
        }[];
        calculated_price: {
            calculated_price: {
                price_list_type: string;
            };
            original_amount: BigNumberInput;
            calculated_amount: BigNumberInput;
        };
    };
    taxLines?: CreateOrderLineItemTaxLineDTO[];
    adjustments?: CreateOrderAdjustmentDTO[];
    cartId?: string;
}
export declare function prepareLineItemData(data: Input): any;
export declare function prepareAdjustmentsData(data: CreateOrderAdjustmentDTO[]): {
    code: string | undefined;
    amount: BigNumberInput;
    description: string | undefined;
    promotion_id: string | undefined;
    provider_id: string | undefined;
}[];
export declare function prepareTaxLinesData(data: CreateOrderLineItemTaxLineDTO[]): {
    description: string | undefined;
    tax_rate_id: string | undefined;
    code: string;
    rate: BigNumberInput;
    provider_id: string | undefined;
}[];
export {};
