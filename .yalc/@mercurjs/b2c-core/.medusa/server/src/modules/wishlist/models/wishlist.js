"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.Wishlist = utils_1.model.define('wishlist', {
    id: utils_1.model.id({ prefix: 'wish' }).primaryKey(),
    reference: utils_1.model.enum(['product'])
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy93aXNobGlzdC9tb2RlbHMvd2lzaGxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWlEO0FBRXBDLFFBQUEsUUFBUSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO0lBQy9DLEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFO0lBQzdDLFNBQVMsRUFBRSxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7Q0FDbkMsQ0FBQyxDQUFBIn0=