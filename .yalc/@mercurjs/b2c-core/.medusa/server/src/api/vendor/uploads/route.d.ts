import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework/http';
import { HttpTypes } from '@medusajs/framework/types';
export declare const POST: (req: AuthenticatedMedusaRequest<HttpTypes.AdminUploadFile>, res: MedusaResponse) => Promise<void>;
