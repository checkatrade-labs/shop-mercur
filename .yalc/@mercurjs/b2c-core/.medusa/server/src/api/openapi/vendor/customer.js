"use strict";
/**
 * @schema VendorCustomer
 * title: "VendorCustomer"
 * description: "Customer who placed an order in sellers store."
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier of the customer.
 *   company_name:
 *     type: string
 *     nullable: true
 *     description: Company name
 *   first_name:
 *     type: string
 *     description: First name
 *   last_name:
 *     type: string
 *     description: Last name
 *   email:
 *     type: string
 *     description: Email
 *   phone:
 *     type: string
 *     nullable: true
 *     description: Phone number
 *   has_account:
 *     type: boolean
 *     description: Indicates if customer has account
 *   groups:
 *     type: array
 *     description: The customer's groups.
 *     items:
 *       $ref: '#/components/schemas/VendorCustomerGroup'
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @schema VendorCustomerGroup
 * title: "VendorCustomerGroup"
 * description: "Customer group details."
 * properties:
 *   id:
 *     type: string
 *     description: The unique identifier of the customer.
 *   name:
 *     type: string
 *     nullable: true
 *     description: Company name
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL29wZW5hcGkvdmVuZG9yL2N1c3RvbWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNHOztBQUVIOzs7Ozs7Ozs7Ozs7R0FZRyJ9