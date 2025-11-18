import Stripe from 'stripe';
export declare const PaymentProviderKeys: {
    CARD: string;
};
export type PaymentIntentOptions = Omit<Stripe.PaymentIntentCreateParams, 'amount' | 'currency' | 'metadata' | 'transfer_group'>;
export declare const ErrorCodes: {
    PAYMENT_INTENT_UNEXPECTED_STATE: string;
};
export declare const ErrorIntentStatus: {
    SUCCEEDED: string;
    CANCELED: string;
};
//# sourceMappingURL=index.d.ts.map