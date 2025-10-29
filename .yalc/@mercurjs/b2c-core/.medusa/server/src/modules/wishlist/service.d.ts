declare const WishlistModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly Wishlist: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        reference: import("@medusajs/framework/utils").EnumProperty<["product"]>;
    }>, "wishlist">;
}>>;
declare class WishlistModuleService extends WishlistModuleService_base {
}
export default WishlistModuleService;
