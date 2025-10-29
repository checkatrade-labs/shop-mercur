"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWishlistEntryStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const wishlist_1 = require("../../../modules/wishlist");
const utils_2 = require("../../../modules/wishlist/utils");
exports.createWishlistEntryStep = (0, workflows_sdk_1.createStep)("create-wishlist", async (input, { container }) => {
    const service = container.resolve(wishlist_1.WISHLIST_MODULE);
    const link = container.resolve(utils_1.ContainerRegistrationKeys.LINK);
    let wishlist = await (0, utils_2.getWishlistFromCustomerId)(container, input.customer_id);
    if (!wishlist) {
        wishlist = await service.createWishlists(input);
        link.create([
            {
                [utils_1.Modules.CUSTOMER]: {
                    customer_id: input.customer_id,
                },
                [wishlist_1.WISHLIST_MODULE]: {
                    wishlist_id: wishlist.id,
                },
            },
        ]);
    }
    await link.create([
        {
            [wishlist_1.WISHLIST_MODULE]: {
                wishlist_id: wishlist.id,
            },
            [utils_1.Modules.PRODUCT]: {
                product_id: input.reference_id,
            },
        },
    ]);
    return new workflows_sdk_1.StepResponse(wishlist);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXdpc2hsaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy93aXNobGlzdC9zdGVwcy9jcmVhdGUtd2lzaGxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQStFO0FBQy9FLHFFQUE2RTtBQUc3RSx3REFBNEQ7QUFFNUQsMkRBQTRFO0FBRS9ELFFBQUEsdUJBQXVCLEdBQUcsSUFBQSwwQkFBVSxFQUMvQyxpQkFBaUIsRUFDakIsS0FBSyxFQUFFLEtBQXdCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2hELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQXdCLDBCQUFlLENBQUMsQ0FBQztJQUMxRSxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9ELElBQUksUUFBUSxHQUFHLE1BQU0sSUFBQSxpQ0FBeUIsRUFDNUMsU0FBUyxFQUNULEtBQUssQ0FBQyxXQUFXLENBQ2xCLENBQUM7SUFDRixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDZCxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUM7WUFDVjtnQkFDRSxDQUFDLGVBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDbEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO2lCQUMvQjtnQkFDRCxDQUFDLDBCQUFlLENBQUMsRUFBRTtvQkFDakIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUFFO2lCQUN6QjthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQjtZQUNFLENBQUMsMEJBQWUsQ0FBQyxFQUFFO2dCQUNqQixXQUFXLEVBQUUsUUFBUSxDQUFDLEVBQUU7YUFDekI7WUFDRCxDQUFDLGVBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakIsVUFBVSxFQUFFLEtBQUssQ0FBQyxZQUFZO2FBQy9CO1NBQ0Y7S0FDRixDQUFDLENBQUM7SUFDSCxPQUFPLElBQUksNEJBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQ0YsQ0FBQyJ9