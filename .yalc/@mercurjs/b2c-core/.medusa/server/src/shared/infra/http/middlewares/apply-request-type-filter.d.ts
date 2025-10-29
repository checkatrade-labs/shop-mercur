import { NextFunction } from 'express';
import { MedusaRequest } from '@medusajs/framework/http';
/**
 * @desc Adds request type filterableFileds
 */
export declare function applyRequestsTypeFilter(): (req: MedusaRequest, _: any, next: NextFunction) => Promise<void>;
