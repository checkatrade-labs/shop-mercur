"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorAcceptMemberInvite = exports.VendorInviteMember = exports.VendorGetMemberInviteParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const framework_1 = require("@mercurjs/framework");
exports.VendorGetMemberInviteParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
});
exports.VendorInviteMember = zod_1.z
    .object({
    email: zod_1.z.string().email(),
    role: zod_1.z.nativeEnum(framework_1.MemberRole)
})
    .strict();
exports.VendorAcceptMemberInvite = zod_1.z
    .object({
    token: zod_1.z.string(),
    name: zod_1.z.string()
})
    .strict();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL2ludml0ZXMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBdUI7QUFFdkIsc0VBQXdFO0FBRXhFLG1EQUFnRDtBQUtuQyxRQUFBLDJCQUEyQixHQUFHLElBQUEsNkJBQWdCLEVBQUM7SUFDMUQsTUFBTSxFQUFFLENBQUM7SUFDVCxLQUFLLEVBQUUsRUFBRTtDQUNWLENBQUMsQ0FBQTtBQW9CVyxRQUFBLGtCQUFrQixHQUFHLE9BQUM7S0FDaEMsTUFBTSxDQUFDO0lBQ04sS0FBSyxFQUFFLE9BQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFDekIsSUFBSSxFQUFFLE9BQUMsQ0FBQyxVQUFVLENBQUMsc0JBQVUsQ0FBQztDQUMvQixDQUFDO0tBQ0QsTUFBTSxFQUFFLENBQUE7QUFtQkUsUUFBQSx3QkFBd0IsR0FBRyxPQUFDO0tBQ3RDLE1BQU0sQ0FBQztJQUNOLEtBQUssRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ2pCLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0NBQ2pCLENBQUM7S0FDRCxNQUFNLEVBQUUsQ0FBQSJ9