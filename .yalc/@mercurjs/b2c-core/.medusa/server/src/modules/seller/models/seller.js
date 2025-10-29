"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const invite_1 = require("./invite");
const member_1 = require("./member");
const onboarding_1 = require("./onboarding");
exports.Seller = utils_1.model.define("seller", {
    id: utils_1.model.id({ prefix: "sel" }).primaryKey(),
    store_status: utils_1.model.enum(framework_1.StoreStatus).default(framework_1.StoreStatus.ACTIVE),
    name: utils_1.model.text().searchable(),
    handle: utils_1.model.text().unique(),
    description: utils_1.model.text().searchable().nullable(),
    photo: utils_1.model.text().nullable(),
    email: utils_1.model.text().nullable(),
    phone: utils_1.model.text().nullable(),
    address_line: utils_1.model.text().nullable(),
    city: utils_1.model.text().nullable(),
    state: utils_1.model.text().nullable(),
    postal_code: utils_1.model.text().nullable(),
    country_code: utils_1.model.text().nullable(),
    tax_id: utils_1.model.text().nullable(),
    members: utils_1.model.hasMany(() => member_1.Member),
    invites: utils_1.model.hasMany(() => invite_1.MemberInvite),
    onboarding: utils_1.model.hasOne(() => onboarding_1.SellerOnboarding).nullable(),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2VsbGVyL21vZGVscy9zZWxsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWtEO0FBRWxELG1EQUFrRDtBQUNsRCxxQ0FBd0M7QUFDeEMscUNBQWtDO0FBQ2xDLDZDQUFnRDtBQUVuQyxRQUFBLE1BQU0sR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtJQUMzQyxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRTtJQUM1QyxZQUFZLEVBQUUsYUFBSyxDQUFDLElBQUksQ0FBQyx1QkFBVyxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUFXLENBQUMsTUFBTSxDQUFDO0lBQ2pFLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQy9CLE1BQU0sRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO0lBQzdCLFdBQVcsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ2pELEtBQUssRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzlCLEtBQUssRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzlCLEtBQUssRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzlCLFlBQVksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3JDLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzdCLEtBQUssRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzlCLFdBQVcsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3BDLFlBQVksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3JDLE1BQU0sRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQy9CLE9BQU8sRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQU0sQ0FBQztJQUNwQyxPQUFPLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO0lBQzFDLFVBQVUsRUFBRSxhQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLDZCQUFnQixDQUFDLENBQUMsUUFBUSxFQUFFO0NBQzVELENBQUMsQ0FBQyJ9