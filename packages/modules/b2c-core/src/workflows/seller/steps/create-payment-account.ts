import { StepResponse, createStep } from "@medusajs/framework/workflows-sdk";

import { CreatePayoutAccountDTO } from "@mercurjs/framework";
import { PAYOUT_MODULE } from "../../../modules/payout";
import { PayoutModuleService } from "../../../modules/payout";

export const createPayoutAccountStep = createStep(
  "create-payout-account",
  async (input: CreatePayoutAccountDTO, { container }) => {

    console.log("--------------------------------");
    console.log("input: ", input);
    console.log("--------------------------------");

    return undefined;

    const service = container.resolve<PayoutModuleService>(PAYOUT_MODULE);

    const payoutAccount = await service.createPayoutAccount(input);

    return new StepResponse(payoutAccount, payoutAccount.id);
  },
  async (id: string, { container }) => {

    console.log("--------------------------------");
    console.log("id: ", id);
    console.log("container: ", container);
    console.log("--------------------------------");

    return undefined;


    if (!id) {
      return;
    }

    const service = container.resolve<PayoutModuleService>(PAYOUT_MODULE);

    await service.deletePayoutAccounts(id);
  }
);
