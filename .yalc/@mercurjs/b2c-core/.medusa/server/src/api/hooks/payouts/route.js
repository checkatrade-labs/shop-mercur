"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const framework_1 = require("@mercurjs/framework");
const POST = async (req, res) => {
    const eventBus = req.scope.resolve(utils_1.Modules.EVENT_BUS);
    await eventBus.emit({
        name: framework_1.PayoutWebhookEvents.ACCOUNT_WEBHOOK_RECEIVED,
        data: {
            data: req.body,
            rawData: req.rawBody,
            headers: req.headers
        }
    }, {
        delay: 5000,
        attempts: 3
    });
    res.sendStatus(200);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2hvb2tzL3BheW91dHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQW1EO0FBRW5ELG1EQUF5RDtBQUVsRCxNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDcEUsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRXJELE1BQU0sUUFBUSxDQUFDLElBQUksQ0FDakI7UUFDRSxJQUFJLEVBQUUsK0JBQW1CLENBQUMsd0JBQXdCO1FBQ2xELElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtZQUNkLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztZQUNwQixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87U0FDckI7S0FDRixFQUNEO1FBQ0UsS0FBSyxFQUFFLElBQUk7UUFDWCxRQUFRLEVBQUUsQ0FBQztLQUNaLENBQ0YsQ0FBQTtJQUVELEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDckIsQ0FBQyxDQUFBO0FBbkJZLFFBQUEsSUFBSSxRQW1CaEIifQ==