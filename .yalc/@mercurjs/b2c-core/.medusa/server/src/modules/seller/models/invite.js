"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberInvite = void 0;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const seller_1 = require("./seller");
exports.MemberInvite = utils_1.model.define("member_invite", {
    id: utils_1.model.id({ prefix: "meminv" }).primaryKey(),
    email: utils_1.model.text(),
    role: utils_1.model.enum(framework_1.MemberRole).default(framework_1.MemberRole.OWNER),
    seller: utils_1.model.belongsTo(() => seller_1.Seller, { mappedBy: "invites" }),
    token: utils_1.model.text(),
    expires_at: utils_1.model.dateTime(),
    accepted: utils_1.model.boolean().default(false),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2VsbGVyL21vZGVscy9pbnZpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWtEO0FBRWxELG1EQUFpRDtBQUNqRCxxQ0FBa0M7QUFFckIsUUFBQSxZQUFZLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7SUFDeEQsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUU7SUFDL0MsS0FBSyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDbkIsSUFBSSxFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsc0JBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxzQkFBVSxDQUFDLEtBQUssQ0FBQztJQUN0RCxNQUFNLEVBQUUsYUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDOUQsS0FBSyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDbkIsVUFBVSxFQUFFLGFBQUssQ0FBQyxRQUFRLEVBQUU7SUFDNUIsUUFBUSxFQUFFLGFBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0NBQ3pDLENBQUMsQ0FBQyJ9