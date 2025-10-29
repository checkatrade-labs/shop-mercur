import { Module } from "@medusajs/framework/utils";

import PayoutModuleService from "./service";
import { StripePayoutProvider, AdyenPayoutProvider } from "./services";

export const PAYOUT_MODULE = "payout";
export { PayoutModuleService };

export default Module(PAYOUT_MODULE, {
  service: PayoutModuleService,
  providers: [
    {
      register: "stripePayoutProvider",
      useClass: StripePayoutProvider,
    },
    {
      register: "adyenPayoutProvider",
      useClass: AdyenPayoutProvider,
    },
  ],
});
