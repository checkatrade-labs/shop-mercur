import { NextFunction } from 'express';
import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
type CheckResourceOwnershipByResourceIdOptions<Body> = {
    entryPoint: string;
    filterField?: string;
    resourceId?: (req: AuthenticatedMedusaRequest<Body>) => string;
};
/**
 * Middleware that verifies if the authenticated member owns/has access to the requested resource.
 * This is done by checking if the member's seller ID matches the resource's seller ID.
 *
 * @param options - Configuration options for the ownership check
 * @param options.entryPoint - The entity type to verify ownership of (e.g. 'seller_product', 'service_zone')
 * @param options.filterField - Field used to filter/lookup the resource (defaults to 'id')
 * @param options.paramIdField - Request parameter containing the resource ID (defaults to 'id')
 *
 * @throws {MedusaError} If the member does not own the resource
 *
 * @example
 * // Basic usage - check ownership of vendor product
 * app.use(checkResourceOwnershipByParamId({
 *   entryPoint: 'seller_product'
 * }))
 *
 * @example
 * // Custom field usage - check ownership of service zone
 * app.use(checkResourceOwnershipByParamId({
 *   entryPoint: 'service_zone',
 *   filterField: 'service_zone_id',
 *   resourceId: (req) => req.params.zone_id
 * }))
 */
export declare const checkResourceOwnershipByResourceId: <Body>({ entryPoint, filterField, resourceId }: CheckResourceOwnershipByResourceIdOptions<Body>) => (req: AuthenticatedMedusaRequest<Body>, res: MedusaResponse, next: NextFunction) => Promise<void>;
export {};
//# sourceMappingURL=check-ownership.d.ts.map