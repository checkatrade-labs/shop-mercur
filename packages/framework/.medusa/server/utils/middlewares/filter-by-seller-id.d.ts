import { NextFunction } from "express";
import { AuthenticatedMedusaRequest } from "@medusajs/framework/http";
/**
 * @desc Adds a seller id to the filterable fields
 */
export declare function filterBySellerId(): (req: AuthenticatedMedusaRequest, _: any, next: NextFunction) => Promise<void>;
//# sourceMappingURL=filter-by-seller-id.d.ts.map