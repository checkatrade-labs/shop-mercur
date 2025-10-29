import { NextFunction } from 'express';
import { MedusaRequest } from '@medusajs/framework/http';
/**
 * @desc Adds request status to filterableFileds
 */
export declare function applyRequestsStatusFilter(): (req: MedusaRequest, _: any, next: NextFunction) => Promise<void>;
