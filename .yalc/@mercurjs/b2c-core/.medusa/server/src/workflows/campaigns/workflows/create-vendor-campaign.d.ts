import { CreateCampaignDTO } from "@medusajs/framework/types";
export declare const createVendorCampaignWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<{
    campaign: CreateCampaignDTO;
    seller_id: string;
}, import("@medusajs/framework/types").CampaignDTO[], []>;
