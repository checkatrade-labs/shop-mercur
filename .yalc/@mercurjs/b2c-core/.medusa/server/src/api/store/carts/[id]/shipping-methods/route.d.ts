import { MedusaRequest, MedusaResponse } from '@medusajs/framework/http';
import { StoreAddCartShippingMethodsType } from '@medusajs/medusa/api/store/carts/validators';
import { StoreDeleteCartShippingMethodsType } from '../../validators';
export declare const POST: (req: MedusaRequest<StoreAddCartShippingMethodsType>, res: MedusaResponse) => Promise<void>;
export declare const DELETE: (req: MedusaRequest<StoreDeleteCartShippingMethodsType>, res: MedusaResponse) => Promise<void>;
