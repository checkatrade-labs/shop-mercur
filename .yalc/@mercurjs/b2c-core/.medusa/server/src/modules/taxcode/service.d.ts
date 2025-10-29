import Stripe from "stripe";
type ModuleOptions = {
    apiKey: string;
};
declare const TaxCodeService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly TaxCode: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        name: import("@medusajs/framework/utils").TextProperty;
        description: import("@medusajs/framework/utils").TextProperty;
        code: import("@medusajs/framework/utils").TextProperty;
    }>, "tax_code">;
}>>;
export default class TaxCodeService extends TaxCodeService_base {
    private readonly stripe_;
    constructor(_: any, { apiKey }: ModuleOptions);
    getTaxCodes(): Promise<Stripe.TaxCode[]>;
}
export {};
