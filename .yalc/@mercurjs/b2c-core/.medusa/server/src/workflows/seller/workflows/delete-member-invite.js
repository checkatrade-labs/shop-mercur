"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMemberInvitesWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteMemberInvitesWorkflow = (0, workflows_sdk_1.createWorkflow)('delete-member-invite', function (id) {
    (0, steps_1.deleteMemberInvitesStep)(id);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLW1lbWJlci1pbnZpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3NlbGxlci93b3JrZmxvd3MvZGVsZXRlLW1lbWJlci1pbnZpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkRBQXdEO0FBRXhELG9DQUFrRDtBQUVyQyxRQUFBLDJCQUEyQixHQUFHLElBQUEsOEJBQWMsRUFDdkQsc0JBQXNCLEVBQ3RCLFVBQVUsRUFBVTtJQUNsQixJQUFBLCtCQUF1QixFQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQzdCLENBQUMsQ0FDRixDQUFBIn0=