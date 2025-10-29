import { NextFunction } from "express";
import { MedusaContainer, MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { ConfigurationRuleType } from "@mercurjs/framework";
export declare function getRuleValue(container: MedusaContainer, rule_type: ConfigurationRuleType): Promise<boolean>;
export declare function checkConfigurationRule(rule_type: ConfigurationRuleType, expected_value: boolean): (req: MedusaRequest, res: MedusaResponse, next: NextFunction) => Promise<void>;
