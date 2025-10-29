"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSellerShippingMethodToCartWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const seller_shipping_option_1 = __importDefault(require("../../../links/seller-shipping-option"));
const steps_1 = require("../steps");
exports.addSellerShippingMethodToCartWorkflow = (0, workflows_sdk_1.createWorkflow)('add-seller-shipping-method-to-cart', function (input) {
    const { data: carts } = (0, core_flows_1.useQueryGraphStep)({
        entity: 'cart',
        filters: {
            id: input.cart_id
        },
        fields: ['id', 'shipping_methods.*'],
        options: { throwIfKeyNotFound: true }
    }).config({ name: 'cart-query' });
    const validateCartShippingOptionsInput = (0, workflows_sdk_1.transform)({ carts, option: input.option }, ({ carts: [cart], option }) => ({
        cart_id: cart.id,
        option_ids: [
            ...cart.shipping_methods.map((method) => method.shipping_option_id),
            option.id
        ]
    }));
    (0, steps_1.validateCartShippingOptionsStep)(validateCartShippingOptionsInput);
    const addShippingMethodToCartInput = (0, workflows_sdk_1.transform)(input, ({ cart_id, option }) => ({
        cart_id,
        options: [option]
    }));
    // default addShippingMethodToCartWorkflow will replace all existing shippings methods in the cart
    core_flows_1.addShippingMethodToCartWorkflow.runAsStep({
        input: addShippingMethodToCartInput
    });
    const shippingOptions = (0, workflows_sdk_1.transform)({ carts, newShippingOption: input.option }, ({ carts: [cart], newShippingOption }) => {
        return [
            ...cart.shipping_methods.map((sm) => sm.shipping_option_id),
            newShippingOption.id
        ];
    });
    const { data: sellerShippingOptions } = (0, core_flows_1.useQueryGraphStep)({
        entity: seller_shipping_option_1.default.entryPoint,
        fields: ['shipping_option.*', 'seller_id'],
        filters: {
            shipping_option_id: shippingOptions
        }
    }).config({ name: 'seller-shipping-option-query' });
    const shippingMethodsToAddInput = (0, workflows_sdk_1.transform)({ carts, sellerShippingOptions, newShippingOption: input.option }, ({ carts: [cart], sellerShippingOptions, newShippingOption }) => {
        const shippingOptionToSellerMap = new Map(sellerShippingOptions.map((option) => [
            option.shipping_option.id,
            option.seller_id
        ]));
        const existingShippingMethodsBySeller = new Map();
        for (const method of cart.shipping_methods) {
            const sellerId = shippingOptionToSellerMap.get(method.shipping_option_id);
            existingShippingMethodsBySeller.set(sellerId, method);
        }
        const newOptionSellerId = shippingOptionToSellerMap.get(newShippingOption.id);
        // Remove any existing shipping method for the same seller
        // since we're replacing it with the new option
        if (existingShippingMethodsBySeller.has(newOptionSellerId)) {
            existingShippingMethodsBySeller.delete(newOptionSellerId);
        }
        return Array.from(existingShippingMethodsBySeller.values()).map((method) => ({
            shipping_option_id: method.shipping_option_id,
            cart_id: cart.id,
            name: method.name,
            data: method.data,
            amount: method.amount,
            is_tax_inclusive: method.is_tax_inclusive
        }));
    });
    (0, core_flows_1.addShippingMethodToCartStep)({
        shipping_methods: shippingMethodsToAddInput
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXNlbGxlci1zaGlwcGluZy1tZXRob2QtdG8tY2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY2FydC93b3JrZmxvd3MvYWRkLXNlbGxlci1zaGlwcGluZy1tZXRob2QtdG8tY2FydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxRUFBNkU7QUFDN0UsNERBSW9DO0FBRXBDLG1HQUE0RTtBQUM1RSxvQ0FBMEQ7QUFVN0MsUUFBQSxxQ0FBcUMsR0FBRyxJQUFBLDhCQUFjLEVBQ2pFLG9DQUFvQyxFQUNwQyxVQUFVLEtBQWlEO0lBQ3pELE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBQSw4QkFBaUIsRUFBQztRQUN4QyxNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTztTQUNsQjtRQUNELE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQztRQUNwQyxPQUFPLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUU7S0FDdEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFBO0lBRWpDLE1BQU0sZ0NBQWdDLEdBQUcsSUFBQSx5QkFBUyxFQUNoRCxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUMvQixDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQ2hCLFVBQVUsRUFBRTtZQUNWLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1lBQ25FLE1B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