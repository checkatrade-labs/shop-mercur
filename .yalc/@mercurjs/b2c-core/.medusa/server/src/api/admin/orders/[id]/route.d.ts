import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework/http';
import { HttpTypes } from '@medusajs/framework/types';
import { AdminGetOrdersOrderParamsType } from '@medusajs/medusa/api/admin/claims/validators';
export declare const GET: (req: AuthenticatedMedusaRequest<AdminGetOrdersOrderParamsType>, res: MedusaResponse<HttpTypes.AdminOrderResponse>) => Promise<void>;
