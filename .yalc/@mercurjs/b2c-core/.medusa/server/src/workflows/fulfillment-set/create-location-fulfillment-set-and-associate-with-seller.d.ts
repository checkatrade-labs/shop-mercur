type CreateFulfillmentSetAndAssociateWithSellerInput = {
    location_id: string;
    fulfillment_set_data: {
        name: string;
        type: string;
    };
    seller_id: string;
};
export declare const createLocationFulfillmentSetAndAssociateWithSellerWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<CreateFulfillmentSetAndAssociateWithSellerInput, unknown, any[]>;
export {};
