import { CreateAttributeDTO } from "@mercurjs/framework";
export declare const createAttributesStepId = "create-attributes";
type CreateAttributeStepInput = Omit<CreateAttributeDTO, "product_category_ids">[];
export declare const createAttributesStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateAttributeStepInput, any[]>;
export {};
