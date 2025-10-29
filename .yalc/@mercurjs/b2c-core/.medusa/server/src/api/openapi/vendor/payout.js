"use strict";
/**
 * @schema VendorPayoutAccount
 * title: "Payout Account"
 * description: "A payout account object with its properties"
 * required:
 *   - id
 *   - status
 *   - reference_id
 *   - data
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier of the payout account.
 *   status:
 *     type: string
 *     enum: [pending, active, disabled]
 *     description: The status of the payout account.
 *   reference_id:
 *     type: string
 *     description: Reference ID used by the payment processor.
 *   data:
 *     type: object
 *     description: Additional data stored with the payout account.
 *   context:
 *     type: object
 *     nullable: true
 *     description: Context data stored with the payout account.
 *   onboarding:
 *     $ref: "#/components/schemas/VendorOnboarding"
 *     nullable: true
 *     description: The onboarding associated with the payout account.
 *   payouts:
 *     type: array
 *     description: The payouts associated with this account.
 *     items:
 *       $ref: "#/components/schemas/VendorPayout"
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
 * @schema VendorPayout
 * title: "Payout"
 * description: "A payout object with its properties"
 * required:
 *   - id
 *   - currency_code
 *   - amount
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier of the payout.
 *   currency_code:
 *     type: string
 *     description: The currency code of the payout.
 *   amount:
 *     type: number
 *     description: The amount of the payout.
 *   data:
 *     type: object
 *     nullable: true
 *     description: Additional data stored with the payout.
 *   payout_account:
 *     $ref: "#/components/schemas/VendorPayoutAccount"
 *     description: The payout account this payout belongs to.
 *   created_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was last updated.
 */
/**
 * @schema VendorOnboarding
 * title: "Onboarding"
 * description: "An onboarding object with its properties"
 * required:
 *   - id
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier of the onboarding.
 *   data:
 *     type: object
 *     nullable: true
 *     description: Additional data stored with the onboarding.
 *   context:
 *     type: object
 *     nullable: true
 *     description: Additional context stored with the onboarding.
 *   payout_account:
 *     $ref: "#/components/schemas/VendorPayoutAccount"
 *     description: The payout account this onboarding belongs to.
 *   created_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     description: The date with timezone at which the resource was last updated.
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS9vcGVuYXBpL3ZlbmRvci9wYXlvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRDRzs7QUFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJHIn0=