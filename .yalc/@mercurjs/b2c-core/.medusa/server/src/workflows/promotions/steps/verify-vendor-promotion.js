"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyVendorPromotionStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.verifyVendorPromotionStep = (0, workflows_sdk_1.createStep)('verify-vendor-promotion', async (input) => {
    const target_type = input.promotion.application_method.target_type;
    if (target_type !== 'items') {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'Invalid Vendor Promotion target_type!');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5LXZlbmRvci1wcm9tb3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3Byb21vdGlvbnMvc3RlcHMvdmVyaWZ5LXZlbmRvci1wcm9tb3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQXVEO0FBQ3ZELHFFQUE4RDtBQUVqRCxRQUFBLHlCQUF5QixHQUFHLElBQUEsMEJBQVUsRUFDakQseUJBQXlCLEVBQ3pCLEtBQUssRUFBRSxLQUEyRCxFQUFFLEVBQUU7SUFDcEUsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUE7SUFDbEUsSUFBSSxXQUFXLEtBQUssT0FBTyxFQUFFLENBQUM7UUFDNUIsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsdUNBQXVDLENBQ3hDLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQyxDQUNGLENBQUEifQ==