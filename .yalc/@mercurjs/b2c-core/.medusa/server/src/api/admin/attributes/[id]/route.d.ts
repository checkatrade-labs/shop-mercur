import { MedusaRequest, MedusaResponse } from '@medusajs/framework';
import { AdminGetAttributeParamsType, AdminUpdateAttributeType } from '../validators';
/**
 * @oas [get] /admin/attributes/{id}
 * operationId: "AdminGetAttribute"
 * summary: "Get Attribute"
 * description: "Retrieves a specific attribute by its ID."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the attribute to retrieve.
 *   - name: fields
 *     in: query
 *     schema:
 *       type: string
 *     required: false
 *     description: Comma-separated fields to include in the response.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             attribute:
 *               $ref: "#/components/schemas/Attribute"
 *   "404":
 *     description: Not Found
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Attribute with id 'attr_123' not found"
 * tags:
 *   - Admin Attributes
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const GET: (req: MedusaRequest<AdminGetAttributeParamsType>, res: MedusaResponse) => Promise<MedusaResponse>;
/**
 * @oas [post] /admin/attributes/{id}
 * operationId: "AdminUpdateAttribute"
 * summary: "Update Attribute"
 * description: "Updates an existing attribute with the specified properties."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the attribute to update.
 * requestBody:
 *   required: true
 *   content:
 *     application/json:
 *       schema:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 *             description: The name of the attribute.
 *           description:
 *             type: string
 *             description: A description of the attribute.
 *           handle:
 *             type: string
 *             description: A unique handle for the attribute.
 *           is_filterable:
 *             type: boolean
 *             description: Whether the attribute can be used for filtering products.
 *           is_required:
 *             type: boolean
 *             description: Whether the attribute is required for products.
 *           ui_component:
 *             type: string
 *             enum: [select, multivalue, unit, toggle, text_area, color_picker]
 *             description: The UI component type for this attribute.
 *           metadata:
 *             type: object
 *             description: Additional metadata for the attribute.
 *           product_category_ids:
 *             type: array
 *             items:
 *               type: string
 *             description: Array of product category IDs to associate with this attribute.
 *           possible_values:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The ID of the possible value (for updates).
 *                 value:
 *                   type: string
 *                   description: The value of the possible value.
 *                 rank:
 *                   type: number
 *                   description: The rank/order of the possible value.
 *                 metadata:
 *                   type: object
 *                   description: Additional metadata for the possible value.
 *             description: Array of possible values for the attribute.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             attribute:
 *               $ref: "#/components/schemas/Attribute"
 *   "404":
 *     description: Not Found
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: "Attribute with id 'attr_123' not found"
 * tags:
 *   - Admin Attributes
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const POST: (req: MedusaRequest<AdminUpdateAttributeType>, res: MedusaResponse) => Promise<MedusaResponse>;
/**
 * @oas [delete] /admin/attributes/{id}
 * operationId: "AdminDeleteAttribute"
 * summary: "Delete Attribute"
 * description: "Deletes an attribute and all its associated possible values."
 * x-authenticated: true
 * parameters:
 *   - name: id
 *     in: path
 *     required: true
 *     schema:
 *       type: string
 *     description: The ID of the attribute to delete.
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               description: The ID of the deleted attribute.
 *             object:
 *               type: string
 *               example: "attribute"
 *             deleted:
 *               type: boolean
 *               example: true
 * tags:
 *   - Admin Attributes
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 */
export declare const DELETE: (req: MedusaRequest, res: MedusaResponse) => Promise<MedusaResponse>;
