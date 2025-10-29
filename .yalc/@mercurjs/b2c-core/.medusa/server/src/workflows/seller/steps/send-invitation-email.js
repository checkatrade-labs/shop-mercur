"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSellerInvitationEmailStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const hosts_1 = require("../../../shared/infra/http/utils/hosts");
exports.sendSellerInvitationEmailStep = (0, workflows_sdk_1.createStep)("send-seller-invitation-email", async (input, { container }) => {
    const service = container.resolve(utils_1.Modules.NOTIFICATION);
    const logger = container.resolve(utils_1.ContainerRegistrationKeys.LOGGER);
    try {
        const notification = await service.createNotifications({
            channel: "email",
            to: input.email,
            template: "newSellerInvitation",
            content: {
                subject: `You've been invited to join Mercur`,
            },
            data: {
                data: {
                    url: (0, hosts_1.buildHostAddress)(hosts_1.Hosts.VENDOR_PANEL, "/register"),
                },
            },
        });
        return new workflows_sdk_1.StepResponse(notification);
    }
    catch (e) {
        logger.error(e);
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, "Notification provider failed!");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1pbnZpdGF0aW9uLWVtYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9zZWxsZXIvc3RlcHMvc2VuZC1pbnZpdGF0aW9uLWVtYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUltQztBQUNuQyxxRUFBNkU7QUFJN0Usa0VBR2dEO0FBRW5DLFFBQUEsNkJBQTZCLEdBQUcsSUFBQSwwQkFBVSxFQUNyRCw4QkFBOEIsRUFDOUIsS0FBSyxFQUFFLEtBQWdDLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3hELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hELE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFbkUsSUFBSSxDQUFDO1FBQ0gsTUFBTSxZQUFZLEdBQUcsTUFBTSxPQUFPLENBQUMsbUJBQW1CLENBQUM7WUFDckQsT0FBTyxFQUFFLE9BQU87WUFDaEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2YsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLG9DQUFvQzthQUM5QztZQUNELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUU7b0JBQ0osR0FBRyxFQUFFLElBQUEsd0JBQWdCLEVBQUMsYUFBSyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7aUJBQ3ZEO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksNEJBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEIsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUNsQywrQkFBK0IsQ0FDaEMsQ0FBQztJQUNKLENBQUM7QUFDSCxDQUFDLENBQ0YsQ0FBQyJ9