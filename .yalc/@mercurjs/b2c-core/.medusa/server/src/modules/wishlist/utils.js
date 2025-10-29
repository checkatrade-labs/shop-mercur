"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWishlistFromCustomerId = getWishlistFromCustomerId;
exports.calculateWishlistProductsPrice = calculateWishlistProductsPrice;
const utils_1 = require("@medusajs/framework/utils");
async function getWishlistFromCustomerId(container, customerId) {
    const knex = container.resolve("__pg_connection__");
    const wishlist = await knex("wishlist")
        .select("wishlist.id")
        .join("customer_customer_wishlist_wishlist", "wishlist.id", "customer_customer_wishlist_wishlist.wishlist_id")
        .where("customer_customer_wishlist_wishlist.customer_id", customerId)
        .first();
    return wishlist;
}
async function calculateWishlistProductsPrice(container, wishlists) {
    const formattedWishlists = wishlists.map((relation) => {
        const wishlist = relation.wishlist;
        return {
            id: wishlist.id,
            products: wishlist.products.map((product) => {
                const { variants, ...productData } = product ?? {};
                const variant = variants?.[0] || null;
                const price = variant?.prices?.[0] || null;
                return {
                    ...productData,
                    variant_id: variant?.id,
                    price_set_id: price?.price_set_id,
                    currency_code: price?.currency_code,
                };
            }),
        };
    });
    const allProducts = formattedWishlists.flatMap((wishlist) => wishlist.products);
    const priceSetIds = allProducts
        .map((p) => p.price_set_id)
        .filter(Boolean);
    const pricingModuleService = container.resolve(utils_1.Modules.PRICING);
    const calculatedPrices = await pricingModuleService.calculatePrices({ id: priceSetIds }, { context: { currency_code: allProducts[0]?.currency_code || "eur" } });
    const calculatedPriceMap = new Map(calculatedPrices.map((price) => [price.id, price.calculated_amount]));
    return formattedWishlists.map((wishlist) => ({
        ...wishlist,
        products: wishlist.products.map((product) => ({
            ...product,
            calculated_amount: calculatedPriceMap.get(product.price_set_id) || null,
        })),
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy93aXNobGlzdC91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLDhEQWlCQztBQUVELHdFQW9EQztBQTNFRCxxREFBb0Q7QUFJN0MsS0FBSyxVQUFVLHlCQUF5QixDQUM3QyxTQUEwQixFQUMxQixVQUFrQjtJQUVsQixNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFFcEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3BDLE1BQU0sQ0FBQyxhQUFhLENBQUM7U0FDckIsSUFBSSxDQUNILHFDQUFxQyxFQUNyQyxhQUFhLEVBQ2IsaURBQWlELENBQ2xEO1NBQ0EsS0FBSyxDQUFDLGlEQUFpRCxFQUFFLFVBQVUsQ0FBQztTQUNwRSxLQUFLLEVBQUUsQ0FBQztJQUVYLE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFFTSxLQUFLLFVBQVUsOEJBQThCLENBQ2xELFNBQTBCLEVBQzFCLFNBQXlCO0lBRXpCLE1BQU0sa0JBQWtCLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ3BELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFFbkMsT0FBTztZQUNMLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRTtZQUNmLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUMxQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsV0FBVyxFQUFFLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztnQkFDbkQsTUFBTSxPQUFPLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO2dCQUN0QyxNQUFNLEtBQUssR0FBRyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO2dCQUUzQyxPQUFPO29CQUNMLEdBQUcsV0FBVztvQkFDZCxVQUFVLEVBQUUsT0FBTyxFQUFFLEVBQUU7b0JBQ3ZCLFlBQVksRUFBRSxLQUFLLEVBQUUsWUFBWTtvQkFDakMsYUFBYSxFQUFFLEtBQUssRUFBRSxhQUFhO2lCQUNwQyxDQUFDO1lBQ0osQ0FBQyxDQUFDO1NBQ0gsQ0FBQztJQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUM1QyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDaEMsQ0FBQztJQUVGLE1BQU0sV0FBVyxHQUFHLFdBQVc7U0FDNUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQWEsQ0FBQztJQUUvQixNQUFNLG9CQUFvQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQzVDLGVBQU8sQ0FBQyxPQUFPLENBQ2hCLENBQUM7SUFFRixNQUFNLGdCQUFnQixHQUFHLE1BQU0sb0JBQW9CLENBQUMsZUFBZSxDQUNqRSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFDbkIsRUFBRSxPQUFPLEVBQUUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsSUFBSSxLQUFLLEVBQUUsRUFBRSxDQUN2RSxDQUFDO0lBRUYsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsQ0FDaEMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FDckUsQ0FBQztJQUVGLE9BQU8sa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLEdBQUcsUUFBUTtRQUNYLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM1QyxHQUFHLE9BQU87WUFDVixpQkFBaUIsRUFDZixrQkFBa0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQXNCLENBQUMsSUFBSSxJQUFJO1NBQ2pFLENBQUMsQ0FBQztLQUNKLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyJ9