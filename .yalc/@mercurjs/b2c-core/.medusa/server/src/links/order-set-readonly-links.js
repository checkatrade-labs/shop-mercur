"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_sdk_1 = require("@medusajs/framework/modules-sdk");
const utils_1 = require("@medusajs/framework/utils");
const marketplace_1 = require("../modules/marketplace");
modules_sdk_1.MedusaModule.setCustomLink({
    isLink: true,
    isReadOnlyLink: true,
    extends: [
        {
            serviceName: marketplace_1.MARKETPLACE_MODULE,
            relationship: {
                serviceName: utils_1.Modules.CUSTOMER,
                entity: "Customer",
                primaryKey: "id",
                foreignKey: "customer_id",
                alias: "customer",
            },
        },
        {
            serviceName: marketplace_1.MARKETPLACE_MODULE,
            relationship: {
                serviceName: utils_1.Modules.CART,
                entity: "Cart",
                primaryKey: "id",
                foreignKey: "cart_id",
                alias: "cart",
            },
        },
        {
            serviceName: marketplace_1.MARKETPLACE_MODULE,
            relationship: {
                serviceName: utils_1.Modules.SALES_CHANNEL,
                entity: "SalesChannel",
                primaryKey: "id",
                foreignKey: "sales_channel_id",
                alias: "sales_channel",
            },
        },
        {
            serviceName: marketplace_1.MARKETPLACE_MODULE,
            relationship: {
                serviceName: utils_1.Modules.PAYMENT,
                entity: "PaymentCollection",
                primaryKey: "id",
                foreignKey: "payment_collection_id",
                alias: "payment_collection",
            },
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2V0LXJlYWRvbmx5LWxpbmtzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpbmtzL29yZGVyLXNldC1yZWFkb25seS1saW5rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUErRDtBQUMvRCxxREFBb0Q7QUFFcEQsd0RBQTREO0FBRTVELDBCQUFZLENBQUMsYUFBYSxDQUFDO0lBQ3pCLE1BQU0sRUFBRSxJQUFJO0lBQ1osY0FBYyxFQUFFLElBQUk7SUFDcEIsT0FBTyxFQUFFO1FBQ1A7WUFDRSxXQUFXLEVBQUUsZ0NBQWtCO1lBQy9CLFlBQVksRUFBRTtnQkFDWixXQUFXLEVBQUUsZUFBTyxDQUFDLFFBQVE7Z0JBQzdCLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsVUFBVSxFQUFFLGFBQWE7Z0JBQ3pCLEtBQUssRUFBRSxVQUFVO2FBQ2xCO1NBQ0Y7UUFDRDtZQUNFLFdBQVcsRUFBRSxnQ0FBa0I7WUFDL0IsWUFBWSxFQUFFO2dCQUNaLFdBQVcsRUFBRSxlQUFPLENBQUMsSUFBSTtnQkFDekIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFVBQVUsRUFBRSxTQUFTO2dCQUNyQixLQUFLLEVBQUUsTUFBTTthQUNkO1NBQ0Y7UUFDRDtZQUNFLFdBQVcsRUFBRSxnQ0FBa0I7WUFDL0IsWUFBWSxFQUFFO2dCQUNaLFdBQVcsRUFBRSxlQUFPLENBQUMsYUFBYTtnQkFDbEMsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixVQUFVLEVBQUUsa0JBQWtCO2dCQUM5QixLQUFLLEVBQUUsZUFBZTthQUN2QjtTQUNGO1FBQ0Q7WUFDRSxXQUFXLEVBQUUsZ0NBQWtCO1lBQy9CLFlBQVksRUFBRTtnQkFDWixXQUFXLEVBQUUsZUFBTyxDQUFDLE9BQU87Z0JBQzVCLE1BQU0sRUFBRSxtQkFBbUI7Z0JBQzNCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixVQUFVLEVBQUUsdUJBQXVCO2dCQUNuQyxLQUFLLEVBQUUsb0JBQW9CO2FBQzVCO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQyJ9