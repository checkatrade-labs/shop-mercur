"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const order_1 = __importDefault(require("@medusajs/medusa/order"));
const marketplace_1 = __importDefault(require("../modules/marketplace"));
exports.default = (0, utils_1.defineLink)(marketplace_1.default.linkable.orderSet, {
    linkable: order_1.default.linkable.order,
    isList: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2V0LW9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpbmtzL29yZGVyLXNldC1vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUF1RDtBQUN2RCxtRUFBaUQ7QUFFakQseUVBQXVEO0FBRXZELGtCQUFlLElBQUEsa0JBQVUsRUFBQyxxQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO0lBQzdELFFBQVEsRUFBRSxlQUFXLENBQUMsUUFBUSxDQUFDLEtBQUs7SUFDcEMsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFDLENBQUMifQ==