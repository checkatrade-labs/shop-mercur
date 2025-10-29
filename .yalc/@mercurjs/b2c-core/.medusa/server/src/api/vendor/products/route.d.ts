import { AuthenticatedMedusaRequest, MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { VendorCreateProductType, VendorGetProductParamsType } from "./validators";
/**
 * @oas [get] /vendor/products
 * operationId: "VendorListProducts"
 * summary: "List Products"
 * description: "Retrieves a list of products for the authenticated vendor."
 * x-authenticated: true
 * parameters:
 *   - name: offset
 *     in: query
 *     schema:
 *       type: number
 *     required: false
 *     description: The number of items to skip before starting to collect the result set.
 *   - name: limit
 *     in: query
 *     schema:
 *       type: number
 *     required: false
 *     description: The number of items to return.
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 *   - name: order
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: The order of the returned items.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             products:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/VendorProduct"
 *             count:
 *               type: integer
 *               description: The total number of items available
 *             offset:
 *               type: integer
 *               description: The number of items skipped before these items
 *             limit:
 *               type: integer
 *               description: The number of items per page
 * tags:
 *   - Vendor Products
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: MedusaRequest<VendorGetProductParamsType>, res: MedusaResponse) => Promise<void>;
/**
 * @oas [post] /vendor/products
 * operationId: "VendorCreateProduct"
 * summary: "Create a Product"
 * description: "Creates a new product for the authenticated vendor."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/VendorCreateProduct"
 * responses:
 *   "201":
 *     description: Created
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             product:
 *               $ref: "#/components/schemas/VendorProduct"
 * tags:
 *   - Vendor Products
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: AuthenticatedMedusaRequest<VendorCreateProductType>, res: MedusaResponse) => Promise<void>;
