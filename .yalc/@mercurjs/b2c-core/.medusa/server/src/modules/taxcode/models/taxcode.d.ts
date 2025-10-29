declare const TaxCode: import("@medusajs/utils").DmlEntity<import("@medusajs/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/utils").PrimaryKeyModifier<string, import("@medusajs/utils").IdProperty>;
    name: import("@medusajs/utils").TextProperty;
    description: import("@medusajs/utils").TextProperty;
    code: import("@medusajs/utils").TextProperty;
}>, "tax_code">;
export default TaxCode;
