"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSellerApproved = checkSellerApproved;
const framework_1 = require("@medusajs/framework");
const utils_1 = require("@medusajs/framework/utils");
function checkSellerApproved(authTypes) {
    return async (req, res, next) => {
        const { projectConfig: { http } } = req.scope.resolve(utils_1.ContainerRegistrationKeys.CONFIG_MODULE);
        const ctx = (0, framework_1.getAuthContextFromJwtToken)(req.headers.authorization, http.jwtSecret, authTypes, ['seller']);
        if (!ctx) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }
        if (ctx.actor_id) {
            return next();
        }
        res.status(403).json({
            message: 'Seller is not active'
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stc2VsbGVyLWFwcHJvdmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9pbmZyYS9odHRwL21pZGRsZXdhcmVzL2NoZWNrLXNlbGxlci1hcHByb3ZlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVdBLGtEQStCQztBQXhDRCxtREFNNEI7QUFDNUIscURBQXFFO0FBRXJFLFNBQWdCLG1CQUFtQixDQUFDLFNBQXFCO0lBQ3ZELE9BQU8sS0FBSyxFQUNWLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ25CLElBQWtCLEVBQ2xCLEVBQUU7UUFDRixNQUFNLEVBQ0osYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQ3hCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQWUsaUNBQXlCLENBQUMsYUFBYSxDQUFDLENBQUE7UUFFNUUsTUFBTSxHQUFHLEdBQUcsSUFBQSxzQ0FBMEIsRUFDcEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQ3pCLElBQUksQ0FBQyxTQUFVLEVBQ2YsU0FBUyxFQUNULENBQUMsUUFBUSxDQUFDLENBQ1gsQ0FBQTtRQUVELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNULE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSxjQUFjO2FBQ3hCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFRCxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQixPQUFPLElBQUksRUFBRSxDQUFBO1FBQ2YsQ0FBQztRQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxzQkFBc0I7U0FDaEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFBO0FBQ0gsQ0FBQyJ9