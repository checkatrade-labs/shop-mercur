"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const order_1 = __importDefault(require("@medusajs/medusa/order"));
const payout_1 = __importDefault(require("../modules/payout"));
exports.default = (0, utils_1.defineLink)(order_1.default.linkable.order, {
    linkable: payout_1.default.linkable.payout,
    isList: true,
}, { database: { table: "order_payout" } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpbmtzL29yZGVyLXBheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUF1RDtBQUN2RCxtRUFBaUQ7QUFFakQsK0RBQTZDO0FBRTdDLGtCQUFlLElBQUEsa0JBQVUsRUFDdkIsZUFBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQzFCO0lBQ0UsUUFBUSxFQUFFLGdCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU07SUFDdEMsTUFBTSxFQUFFLElBQUk7Q0FDYixFQUNELEVBQUUsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxFQUFFLENBQ3hDLENBQUMifQ==