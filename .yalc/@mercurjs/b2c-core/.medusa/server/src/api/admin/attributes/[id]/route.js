"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_1 = require("../../../../workflows/attribute/workflows");
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
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const attributeId = req.params.id;
    const { data: [attribute] } = await query.graph({
        entity: 'attribute',
        ...req.queryConfig,
        filters: {
            id: attributeId
        }
    }, { throwIfKeyNotFound: true });
    return res.json({ attribute });
};
exports.GET = GET;
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
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const attributeId = req.params.id;
    const { data: [existingAttribute] } = await query.graph({
        entity: 'attribute',
        fields: ['id'],
        filters: {
            id: attributeId
        }
    });
    if (!existingAttribute) {
        throw new utils_1.MedusaError(utils_1.MedusaErrorTypes.NOT_FOUND, `Attribute with id '${attributeId}' not found`);
    }
    await (0, workflows_1.updateAttributesWorkflow)(req.scope).run({
        input: {
            attributes: [
                {
                    ...req.validatedBody,
                    id: attributeId,
                    product_category_ids: req.validatedBody.product_category_ids?.map((id) => ({ id })) ||
                        undefined
                }
            ]
        }
    });
    const { data: [attribute] } = await query.graph({
        entity: 'attribute',
        filters: {
            id: attributeId
        },
        ...req.queryConfig
    });
    return res.json({ attribute });
};
exports.POST = POST;
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
const DELETE = async (req, res) => {
    const attributeId = req.params.id;
    await (0, workflows_1.deleteAttributeWorkflow)(req.scope).run({
        input: {
            id: attributeId
        }
    });
    return res.json({
        id: attributeId,
        object: 'attribute',
        deleted: true
    });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2F0dHJpYnV0ZXMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFJa0M7QUFFbEMseUVBR2tEO0FBTWxEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRDRztBQUNJLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBK0MsRUFDL0MsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFBO0lBRWpDLE1BQU0sRUFDSixJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFDbEIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQ25CO1FBQ0UsTUFBTSxFQUFFLFdBQVc7UUFDbkIsR0FBRyxHQUFHLENBQUMsV0FBVztRQUNsQixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsV0FBVztTQUNoQjtLQUNGLEVBQ0QsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FDN0IsQ0FBQTtJQUVELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUE7QUFDaEMsQ0FBQyxDQUFBO0FBdEJZLFFBQUEsR0FBRyxPQXNCZjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwRkc7QUFDSSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQTRDLEVBQzVDLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtJQUVqQyxNQUFNLEVBQ0osSUFBSSxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFDMUIsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDcEIsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2QsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLFdBQVc7U0FDaEI7S0FDRixDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2QixNQUFNLElBQUksbUJBQVcsQ0FDbkIsd0JBQWdCLENBQUMsU0FBUyxFQUMxQixzQkFBc0IsV0FBVyxhQUFhLENBQy9DLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTSxJQUFBLG9DQUF3QixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDNUMsS0FBSyxFQUFFO1lBQ0wsVUFBVSxFQUFFO2dCQUNWO29CQUNFLEdBQUcsR0FBRyxDQUFDLGFBQWE7b0JBQ3BCLEVBQUUsRUFBRSxXQUFXO29CQUNmLG9CQUFvQixFQUNsQixHQUFHLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQzdELFNBQVM7aUJBQ1o7YUFDRjtTQUNGO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxFQUNKLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUNsQixHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsV0FBVztRQUNuQixPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsV0FBVztTQUNoQjtRQUNELEdBQUcsR0FBRyxDQUFDLFdBQVc7S0FDbkIsQ0FBQyxDQUFBO0lBRUYsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtBQUNoQyxDQUFDLENBQUE7QUFsRFksUUFBQSxJQUFJLFFBa0RoQjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1DRztBQUNJLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUN0RSxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtJQUVqQyxNQUFNLElBQUEsbUNBQXVCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMzQyxLQUFLLEVBQUU7WUFDTCxFQUFFLEVBQUUsV0FBVztTQUNoQjtLQUNGLENBQUMsQ0FBQTtJQUVGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNkLEVBQUUsRUFBRSxXQUFXO1FBQ2YsTUFBTSxFQUFFLFdBQVc7UUFDbkIsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFkWSxRQUFBLE1BQU0sVUFjbEIifQ==