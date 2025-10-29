"use strict";
/**
 * @schema OrderReturnRequest
 * title: "Order return request"
 * description: "A return request object with its properties"
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier of the order return request.
 *   customer_id:
 *     type: string
 *     description: The id of the submitter
 *   customer_note:
 *     type: string
 *     description: Note from the submitter
 *   vendor_reviewer_id:
 *     type: string
 *     description: The id of the vendor reviewer
 *   vendor_reviewer_note:
 *     type: string
 *     description: Note from the vendor reviewer
 *   vendor_reviewer_date:
 *     type: string
 *     format: date-time
 *     description: The date with timezone of the vendor review
 *   admin_reviewer_id:
 *     type: string
 *     description: The id of the admin reviewer
 *   admin_reviewer_note:
 *     type: string
 *     description: Note from the admin reviewer
 *   admin_reviewer_date:
 *     type: string
 *     format: date-time
 *     description: The date with timezone of the admin review
 *   status:
 *     type: string
 *     enum: [pending,refunded,withdrawn,escalated,canceled]
 *   order:
 *     type: object
 *     properties:
 *        id:
 *          type: string
 *   line_items:
 *     type: array
 *     description: The line items to return.
 *     items:
 *       $ref: "#/components/schemas/OrderReturnRequestLineItem"
 *   created_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was last updated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @schema OrderReturnRequestLineItem
 * title: "Line item of the order return request"
 * description: "Line item object with its properties"
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier of the order return request.
 *   line_item_id:
 *     type: string
 *     description: The id of the line item in the order
 *   quantity:
 *     type: number
 *     description: The amount of the items to return
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLXJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL29wZW5hcGkvdmVuZG9yL3JldHVybi1yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVERzs7QUFFSDs7Ozs7Ozs7Ozs7Ozs7R0FjRyJ9