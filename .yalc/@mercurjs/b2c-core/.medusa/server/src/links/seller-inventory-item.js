"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const inventory_1 = __importDefault(require("@medusajs/medusa/inventory"));
const seller_1 = __importDefault(require("../modules/seller"));
exports.default = (0, utils_1.defineLink)(seller_1.default.linkable.seller, {
    linkable: inventory_1.default.linkable.inventoryItem,
    isList: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLWludmVudG9yeS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpbmtzL3NlbGxlci1pbnZlbnRvcnktaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUF1RDtBQUN2RCwyRUFBeUQ7QUFFekQsK0RBQTZDO0FBRTdDLGtCQUFlLElBQUEsa0JBQVUsRUFBQyxnQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7SUFDdEQsUUFBUSxFQUFFLG1CQUFlLENBQUMsUUFBUSxDQUFDLGFBQWE7SUFDaEQsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFDLENBQUMifQ==