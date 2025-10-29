"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = sellerCreationRequestAcceptedHandler;
const framework_1 = require("@mercurjs/framework");
const workflows_1 = require("../workflows");
const utils_1 = require("@medusajs/framework/utils");
async function sellerCreationRequestAcceptedHandler({ event, container, }) {
    const logger = container.resolve(utils_1.ContainerRegistrationKeys.LOGGER);
    const request = event.data;
    const { result: seller } = await workflows_1.createSellerWorkflow.run({
        container,
        input: {
            member: request.data.member,
            seller: request.data.seller,
            auth_identity_id: request.data.auth_identity_id,
        },
    });
    logger.info(`Seller creation request accepted: ${request.id}, seller: ${seller.id}`);
}
exports.config = {
    event: framework_1.SellerAccountRequestUpdatedEvent.ACCEPTED,
    context: {
        subscriberId: "seller-creation-request-accepted-handler",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLWNyZWF0aW9uLXJlcXVlc3QtYWNjZXB0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3Vic2NyaWJlcnMvc2VsbGVyLWNyZWF0aW9uLXJlcXVlc3QtYWNjZXB0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBVUEsdURBbUJDO0FBM0JELG1EQUc2QjtBQUU3Qiw0Q0FBb0Q7QUFDcEQscURBQXNFO0FBRXZELEtBQUssVUFBVSxvQ0FBb0MsQ0FBQyxFQUNqRSxLQUFLLEVBQ0wsU0FBUyxHQUNrQjtJQUMzQixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25FLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFM0IsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLGdDQUFvQixDQUFDLEdBQUcsQ0FBQztRQUN4RCxTQUFTO1FBQ1QsS0FBSyxFQUFFO1lBQ0wsTUFBTSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBYTtZQUNsQyxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFhO1lBQ2xDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQTBCO1NBQzFEO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLElBQUksQ0FDVCxxQ0FBcUMsT0FBTyxDQUFDLEVBQUUsYUFBYSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQ3hFLENBQUM7QUFDSixDQUFDO0FBRVksUUFBQSxNQUFNLEdBQXFCO0lBQ3RDLEtBQUssRUFBRSw0Q0FBZ0MsQ0FBQyxRQUFRO0lBQ2hELE9BQU8sRUFBRTtRQUNQLFlBQVksRUFBRSwwQ0FBMEM7S0FDekQ7Q0FDRixDQUFDIn0=