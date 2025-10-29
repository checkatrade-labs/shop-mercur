"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorGetAttributesParams = void 0;
const zod_1 = require("zod");
const validators_1 = require("@medusajs/medusa/api/utils/validators");
const framework_1 = require("@mercurjs/framework");
exports.VendorGetAttributesParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50
}).merge(zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    handle: zod_1.z.string().optional(),
    ui_component: zod_1.z.nativeEnum(framework_1.AttributeUIComponent).optional()
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hcGkvdmVuZG9yL2F0dHJpYnV0ZXMvdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBdUI7QUFFdkIsc0VBQXdFO0FBRXhFLG1EQUEwRDtBQUs3QyxRQUFBLHlCQUF5QixHQUFHLElBQUEsNkJBQWdCLEVBQUM7SUFDeEQsTUFBTSxFQUFFLENBQUM7SUFDVCxLQUFLLEVBQUUsRUFBRTtDQUNWLENBQUMsQ0FBQyxLQUFLLENBQ04sT0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNQLEVBQUUsRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3pCLElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzNCLE1BQU0sRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQzdCLFlBQVksRUFBRSxPQUFDLENBQUMsVUFBVSxDQUFDLGdDQUFvQixDQUFDLENBQUMsUUFBUSxFQUFFO0NBQzVELENBQUMsQ0FDSCxDQUFBIn0=