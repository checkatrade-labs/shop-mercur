import { NextFunction } from 'express';
import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
type CheckResourceOwnershipByResourceIdOptions<Body> = {
    entryPoint: string;
    filterField?: string;
    resourceId?: (req: AuthenticatedMedusaRequest<Body>) => string;
};
export declare const checkCustomerResourceOwnershipByResourceId: <Body>({ entryPoint, filterField, resourceId }: CheckResourceOwnershipByResourceIdOptions<Body>) => (req: AuthenticatedMedusaRequest<Body>, res: MedusaResponse, next: NextFunction) => Promise<void>;
export {};
