import { NextFunction } from 'express';
import { AuthType, MedusaRequest, MedusaResponse } from '@medusajs/framework';
export declare function checkSellerApproved(authTypes: AuthType[]): (req: MedusaRequest, res: MedusaResponse, next: NextFunction) => Promise<void | MedusaResponse>;
