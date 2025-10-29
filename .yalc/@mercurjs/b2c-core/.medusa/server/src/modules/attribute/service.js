"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const attribute_1 = __importDefault(require("./models/attribute"));
const attribute_possible_value_1 = __importDefault(require("./models/attribute-possible-value"));
const attribute_value_1 = __importDefault(require("./models/attribute-value"));
class AttributeModuleService extends (0, utils_1.MedusaService)({
    Attribute: attribute_1.default,
    AttributeValue: attribute_value_1.default,
    AttributePossibleValue: attribute_possible_value_1.default,
}) {
    constructor({ attributeRepository, attributePossibleValueRepository, }) {
        super(...arguments);
        this.attributeRepository_ = attributeRepository;
        this.attributePossibleValueRepository_ = attributePossibleValueRepository;
    }
    /**
     *
     * @param input
     * @param sharedContext
     *
     * Useful to update attribute, allowing to upsert possible_values in the same operation. If "id"
     * is not provided for "possible_values" entries, it will lookup the DB by attributePossibleValue.value,
     * to update or create accordingly.
     *
     * Assumes caller will eventually refetch entities, for now, to reduce complexity of this
     * method and concentrate on upserting like ProductOption - ProductOptionValue from Medusa
     */
    async updateAttributeWithUpsertOrReplacePossibleValues(input, sharedContext) {
        const normalizedInput = Array.isArray(input) ? input : [input];
        return this.updateAttributeWithUpsertOrReplacePossibleValues_(normalizedInput, sharedContext);
    }
    async updateAttributeWithUpsertOrReplacePossibleValues_(input, sharedContext) {
        const upsertedValues = await this.attributePossibleValueRepository_.upsert(input.flatMap((element) => element.possible_values), sharedContext);
        const attributesInput = input.map((toUpdate) => {
            const { ...attribute } = toUpdate;
            return {
                ...attribute,
                possible_values: upsertedValues
                    .filter((val) => val.attribute_id === attribute.id)
                    .map((upserted) => ({ id: upserted.id })),
            };
        });
        return this.attributeRepository_.upsertWithReplace(attributesInput, { relations: ["possible_values"] }, sharedContext);
    }
}
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AttributeModuleService.prototype, "updateAttributeWithUpsertOrReplacePossibleValues", null);
__decorate([
    (0, utils_1.InjectTransactionManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], AttributeModuleService.prototype, "updateAttributeWithUpsertOrReplacePossibleValues_", null);
exports.default = AttributeModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2F0dHJpYnV0ZS9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EscURBS21DO0FBRW5DLG1FQUEyQztBQUMzQyxpR0FBdUU7QUFDdkUsK0VBQXNEO0FBVXRELE1BQU0sc0JBQXVCLFNBQVEsSUFBQSxxQkFBYSxFQUFDO0lBQ2pELFNBQVMsRUFBVCxtQkFBUztJQUNULGNBQWMsRUFBZCx5QkFBYztJQUNkLHNCQUFzQixFQUF0QixrQ0FBc0I7Q0FDdkIsQ0FBQztJQUlBLFlBQVksRUFDVixtQkFBbUIsRUFDbkIsZ0NBQWdDLEdBQ1g7UUFDckIsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG1CQUFtQixDQUFDO1FBQ2hELElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxnQ0FBZ0MsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFFRyxBQUFOLEtBQUssQ0FBQyxnREFBZ0QsQ0FDcEQsS0FBZ0QsRUFDL0IsYUFBc0M7UUFFdkQsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRS9ELE9BQU8sSUFBSSxDQUFDLGlEQUFpRCxDQUMzRCxlQUFlLEVBQ2YsYUFBYSxDQUNkLENBQUM7SUFDSixDQUFDO0lBR2UsQUFBTixLQUFLLENBQUMsaURBQWlELENBQy9ELEtBQTJCLEVBQ1YsYUFBc0M7UUFFdkQsTUFBTSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsaUNBQWlDLENBQUMsTUFBTSxDQUN4RSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQ25ELGFBQWEsQ0FDZCxDQUFDO1FBRUYsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzdDLE1BQU0sRUFBRSxHQUFHLFNBQVMsRUFBRSxHQUFHLFFBQVEsQ0FBQztZQUNsQyxPQUFPO2dCQUNMLEdBQUcsU0FBUztnQkFDWixlQUFlLEVBQUUsY0FBYztxQkFDNUIsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxFQUFFLENBQUM7cUJBQ2xELEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUM1QyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FDaEQsZUFBZSxFQUNmLEVBQUUsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUNsQyxhQUFhLENBQ2QsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXRDTztJQURMLElBQUEscUJBQWEsR0FBRTtJQUdiLFdBQUEsSUFBQSxxQkFBYSxHQUFFLENBQUE7Ozs7OEZBUWpCO0FBR2U7SUFEZixJQUFBLGdDQUF3QixHQUFFO0lBR3hCLFdBQUEsSUFBQSxxQkFBYSxHQUFFLENBQUE7Ozs7K0ZBc0JqQjtBQUdILGtCQUFlLHNCQUFzQixDQUFDIn0=