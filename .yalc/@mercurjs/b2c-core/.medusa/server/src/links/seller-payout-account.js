"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const payout_1 = __importDefault(require("../modules/payout"));
const seller_1 = __importDefault(require("../modules/seller"));
exports.default = (0, utils_1.defineLink)(seller_1.default.linkable.seller, payout_1.default.linkable.payoutAccount);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLXBheW91dC1hY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpbmtzL3NlbGxlci1wYXlvdXQtYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFEQUF1RDtBQUV2RCwrREFBNkM7QUFDN0MsK0RBQTZDO0FBRTdDLGtCQUFlLElBQUEsa0JBQVUsRUFDdkIsZ0JBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUM1QixnQkFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQ3BDLENBQUMifQ==