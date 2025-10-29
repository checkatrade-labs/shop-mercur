"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_1 = __importDefault(require("stripe"));
const utils_1 = require("@medusajs/framework/utils");
const taxcode_1 = __importDefault(require("./models/taxcode"));
class TaxCodeService extends (0, utils_1.MedusaService)({ TaxCode: taxcode_1.default }) {
    constructor(_, { apiKey }) {
        super(_);
        this.stripe_ = new stripe_1.default(apiKey || "sk_");
    }
    async getTaxCodes() {
        let response = await this.stripe_.taxCodes.list({ limit: 100 });
        const taxCodes = [...response.data];
        while (response.has_more) {
            const lastId = response.data.pop().id;
            const currentResponse = await this.stripe_.taxCodes.list({
                limit: 100,
                starting_after: lastId,
            });
            taxCodes.push(...currentResponse.data);
            response = currentResponse;
        }
        return taxCodes;
    }
}
exports.default = TaxCodeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3RheGNvZGUvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUU1QixxREFBMEQ7QUFFMUQsK0RBQXVDO0FBTXZDLE1BQXFCLGNBQWUsU0FBUSxJQUFBLHFCQUFhLEVBQUMsRUFBRSxPQUFPLEVBQVAsaUJBQU8sRUFBRSxDQUFDO0lBR3BFLFlBQVksQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFpQjtRQUN0QyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0JBQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXO1FBQ2YsSUFBSSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUVoRSxNQUFNLFFBQVEsR0FBcUIsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxPQUFPLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN6QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRyxDQUFDLEVBQUUsQ0FBQztZQUN2QyxNQUFNLGVBQWUsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDdkQsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsY0FBYyxFQUFFLE1BQU07YUFDdkIsQ0FBQyxDQUFDO1lBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQzdCLENBQUM7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUF4QkQsaUNBd0JDIn0=