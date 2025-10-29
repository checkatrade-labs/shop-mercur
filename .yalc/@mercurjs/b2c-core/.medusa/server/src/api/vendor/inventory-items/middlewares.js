"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorInventoryItemsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const seller_inventory_item_1 = __importDefault(require("../../../links/seller-inventory-item"));
const seller_stock_location_1 = __importDefault(require("../../../links/seller-stock-location"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
exports.vendorInventoryItemsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/inventory-items',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetInventoryItemsParams, query_config_1.vendorInventoryItemQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/inventory-items/location-levels/batch',
        middlewares: [(0, framework_1.validateAndTransformBody)(validators_1.VendorBatchInventoryItemLevels)]
    },
    {
        method: ['GET'],
        matcher: '/vendor/inventory-items/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetInventoryItemsParams, query_config_1.vendorInventoryItemQueryConfig.retrieve),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_inventory_item_1.default.entryPoint,
                filterField: 'inventory_item_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/inventory-items/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetInventoryItemsParams, query_config_1.vendorInventoryItemQueryConfig.retrieve),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdateInventoryItem),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_inventory_item_1.default.entryPoint,
                filterField: 'inventory_item_id'
            })
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/inventory-items/:id/location-levels',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetInventoryItemsParams, query_config_1.vendorInventoryLevelQueryConfig.list),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_inventory_item_1.default.entryPoint,
                filterField: 'inventory_item_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/inventory-items/:id/location-levels',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetInventoryItemsParams, query_config_1.vendorInventoryLevelQueryConfig.retrieve),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreateInventoryLocationLevel),
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_inventory_item_1.default.entryPoint,
                filterField: 'inventory_item_id'
            })
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/inventory-items/:id/location-levels/batch',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorBatchInventoryItemLocationsLevel)
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/inventory-items/:id/location-levels/:location_id',
        middlewares: [
            (0, framework_1.unlessPath)(/.*\/location-levels\/batch/, (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetInventoryItemsParams, query_config_1.vendorInventoryLevelQueryConfig.retrieve)),
            (0, framework_1.unlessPath)(/.*\/location-levels\/batch/, (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_inventory_item_1.default.entryPoint,
                filterField: 'inventory_item_id'
            })),
            (0, framework_1.unlessPath)(/.*\/location-levels\/batch/, (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_stock_location_1.default.entryPoint,
                filterField: 'stock_location_id',
                resourceId: (req) => req.params.location_id
            }))
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/inventory-items/:id/location-levels/:location_id',
        middlewares: [
            (0, framework_1.unlessPath)(/.*\/location-levels\/batch/, (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetInventoryItemsParams, query_config_1.vendorInventoryLevelQueryConfig.retrieve)),
            (0, framework_1.unlessPath)(/.*\/location-levels\/batch/, (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdateInventoryLevel)),
            (0, framework_1.unlessPath)(/.*\/location-levels\/batch/, (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_inventory_item_1.default.entryPoint,
                filterField: 'inventory_item_id'
            })),
            (0, framework_1.unlessPath)(/.*\/location-levels\/batch/, (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_stock_location_1.default.entryPoint,
                filterField: 'stock_location_id',
                resourceId: (req) => req.params.location_id
            }))
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9pbnZlbnRvcnktaXRlbXMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbURBSTRCO0FBRzVCLGlHQUFzRTtBQUN0RSxpR0FBc0U7QUFDdEUsd0VBRytDO0FBQy9DLGlEQUd1QjtBQUN2Qiw2Q0FPcUI7QUFFUixRQUFBLCtCQUErQixHQUFzQjtJQUNoRTtRQUNFLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRSx5QkFBeUI7UUFDbEMsV0FBVyxFQUFFO1lBQ1gsSUFBQSxxQ0FBeUIsRUFDdkIsMENBQTZCLEVBQzdCLDZDQUE4QixDQUFDLElBQUksQ0FDcEM7WUFDRCxJQUFBLDhCQUFnQixHQUFFO1NBQ25CO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUNoQixPQUFPLEVBQUUsK0NBQStDO1FBQ3hELFdBQVcsRUFBRSxDQUFDLElBQUEsb0NBQXdCLEVBQUMsMkNBQThCLENBQUMsQ0FBQztLQUN4RTtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLDZCQUE2QjtRQUN0QyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QiwwQ0FBNkIsRUFDN0IsNkNBQThCLENBQUMsUUFBUSxDQUN4QztZQUNELElBQUEsZ0RBQWtDLEVBQUM7Z0JBQ2pDLFVBQVUsRUFBRSwrQkFBbUIsQ0FBQyxVQUFVO2dCQUMxQyxXQUFXLEVBQUUsbUJBQW1CO2FBQ2pDLENBQUM7U0FDSDtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEIsT0FBTyxFQUFFLDZCQUE2QjtRQUN0QyxXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QiwwQ0FBNkIsRUFDN0IsNkNBQThCLENBQUMs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