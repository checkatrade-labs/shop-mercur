"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorReservationsMiddlewares = void 0;
const framework_1 = require("@medusajs/framework");
const utils_1 = require("@medusajs/framework/utils");
const seller_inventory_item_1 = __importDefault(require("../../../links/seller-inventory-item"));
const seller_stock_location_1 = __importDefault(require("../../../links/seller-stock-location"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const utils_2 = require("../../../shared/infra/http/utils");
const query_config_1 = require("./query-config");
const validators_1 = require("./validators");
const checkReservationOwnership = () => {
    return async (req, res, next) => {
        const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
        const { data: [reservation] } = await query.graph({
            entity: 'reservation',
            fields: ['inventory_item_id'],
            filters: {
                id: req.params.id
            }
        });
        if (!reservation) {
            res.status(404).json({
                message: `Entity not found`,
                type: utils_1.MedusaError.Types.NOT_FOUND
            });
            return;
        }
        const { data: [relation] } = await query.graph({
            entity: seller_inventory_item_1.default.entryPoint,
            fields: ['seller_id'],
            filters: {
                inventory_item_id: reservation.inventory_item_id
            }
        });
        const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
        if (!seller || !relation || seller.id !== relation.seller_id) {
            res.status(403).json({
                message: 'You are not allowed to perform this action',
                type: utils_1.MedusaError.Types.NOT_ALLOWED
            });
            return;
        }
        next();
    };
};
const canCreateReservation = () => {
    return async (req, res, next) => {
        const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
        const seller = await (0, utils_2.fetchSellerByAuthActorId)(req.auth_context.actor_id, req.scope);
        const { data: [item] } = await query.graph({
            entity: seller_inventory_item_1.default.entryPoint,
            fields: ['id'],
            filters: {
                inventory_item_id: req.validatedBody.inventory_item_id,
                seller_id: seller.id
            }
        });
        const { data: [location] } = await query.graph({
            entity: seller_stock_location_1.default.entryPoint,
            fields: ['id'],
            filters: {
                stock_location_id: req.validatedBody.location_id,
                seller_id: seller.id
            }
        });
        if (!seller || !item || !location) {
            res.status(403).json({
                message: 'You are not allowed to perform this action',
                type: utils_1.MedusaError.Types.NOT_ALLOWED
            });
            return;
        }
        next();
    };
};
exports.vendorReservationsMiddlewares = [
    {
        method: ['GET'],
        matcher: '/vendor/reservations',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReservationParams, query_config_1.vendorReservationQueryConfig.list),
            (0, middlewares_1.filterBySellerId)()
        ]
    },
    {
        method: ['POST'],
        matcher: '/vendor/reservations',
        middlewares: [
            (0, framework_1.validateAndTransformBody)(validators_1.VendorCreateReservation),
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReservationParams, query_config_1.vendorReservationQueryConfig.retrieve),
            canCreateReservation()
        ]
    },
    {
        method: ['DELETE'],
        matcher: '/vendor/reservations/:id',
        middlewares: [checkReservationOwnership()]
    },
    {
        method: ['POST'],
        matcher: '/vendor/reservations/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReservationParams, query_config_1.vendorReservationQueryConfig.retrieve),
            (0, framework_1.validateAndTransformBody)(validators_1.VendorUpdateReservation),
            checkReservationOwnership()
        ]
    },
    {
        method: ['GET'],
        matcher: '/vendor/reservations/:id',
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetReservationParams, query_config_1.vendorReservationQueryConfig.retrieve),
            checkReservationOwnership()
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9yZXNlcnZhdGlvbnMvbWlkZGxld2FyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsbURBTTRCO0FBQzVCLHFEQUdrQztBQUVsQyxpR0FBc0U7QUFDdEUsaUdBQXNFO0FBQ3RFLHdFQUF5RTtBQUN6RSw0REFBMkU7QUFDM0UsaURBQTZEO0FBQzdELDZDQUtxQjtBQUVyQixNQUFNLHlCQUF5QixHQUFHLEdBQUcsRUFBRTtJQUNyQyxPQUFPLEtBQUssRUFDVixHQUErQixFQUMvQixHQUFtQixFQUNuQixJQUFrQixFQUNsQixFQUFFO1FBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFaEUsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUNwQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNwQixNQUFNLEVBQUUsYUFBYTtZQUNyQixNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUM3QixPQUFPLEVBQUU7Z0JBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTthQUNsQjtTQUNGLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbkIsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsSUFBSSxFQUFFLG1CQUFXLENBQUMsS0FBSyxDQUFDLFNBQVM7YUFDbEMsQ0FBQyxDQUFBO1lBQ0YsT0FBTTtRQUNSLENBQUM7UUFFRCxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQ2pCLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFD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