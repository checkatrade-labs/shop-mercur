import { CreateMemberDTO, CreateSellerDTO } from "@mercurjs/framework";
type CreateSellerWorkflowInput = {
    seller: CreateSellerDTO;
    member: Omit<CreateMemberDTO, "seller_id">;
    auth_identity_id: string;
};
export declare const createSellerWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<CreateSellerWorkflowInput, import("@mercurjs/framework").SellerDTO, [import("@medusajs/workflows-sdk").Hook<"sellerCreated", {
    sellerId: (string | import("@medusajs/workflows-sdk").WorkflowData<string>) & string;
}, unknown>]>;
export {};
