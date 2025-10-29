import { MedusaContainer } from '@medusajs/framework/types';
export default function dailyPayoutsJob(container: MedusaContainer): Promise<void>;
export declare const config: {
    name: string;
    schedule: string;
};
