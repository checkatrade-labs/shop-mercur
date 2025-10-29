import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { CreateProductOptionType } from "../../validators";
/**
 * @oas [post] /vendor/products/{id}/options
 * operationId: "VendorCreateOptionForProductById"
 * summary: "Create option for product"
 * description: "Creates option for product."
 * x-authenticated: true
 * parameters:
 *   - in: path
 *     name: id
 *     required: true
 *     description: The ID of the Product.
 *     schema:
 *       type: string
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/CreateProductOption"
 * responses:
 *   "200":
 *     description: OK
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
export declare const POST: (req: AuthenticatedMedusaRequest<CreateProductOptionType>, res: MedusaResponse) => Promise<void>;
