import { NextFunction } from 'express';
import { AuthenticatedMedusaRequest, MedusaResponse } from '@medusajs/framework';
/**
 * Middleware that checks store status and request method to determine access.
 * - Allows all operations if store status is ACTIVE
 * - Allows GET operations for any store status
 * - Blocks all other operations with 403 Forbidden
 */
export declare const storeActiveGuard: (req: AuthenticatedMedusaRequest, res: MedusaResponse, next: NextFunction) => Promise<void | MedusaResponse>;
