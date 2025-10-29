"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
const TaxCode = utils_1.model.define('tax_code', {
    id: utils_1.model.id({ prefix: 'taxc' }).primaryKey(),
    name: utils_1.model.text().default(''),
    description: utils_1.model.text().default(''),
    code: utils_1.model.text().unique()
});
exports.default = TaxCode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGF4Y29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3RheGNvZGUvbW9kZWxzL3RheGNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBdUM7QUFFdkMsTUFBTSxPQUFPLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7SUFDdkMsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUU7SUFDN0MsSUFBSSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBQzlCLFdBQVcsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztJQUNyQyxJQUFJLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRTtDQUM1QixDQUFDLENBQUE7QUFFRixrQkFBZSxPQUFPLENBQUEifQ==