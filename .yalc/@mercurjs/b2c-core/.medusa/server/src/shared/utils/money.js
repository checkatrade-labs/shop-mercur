"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSmallestUnit = getSmallestUnit;
exports.getAmountFromSmallestUnit = getAmountFromSmallestUnit;
const utils_1 = require("@medusajs/framework/utils");
function getCurrencyMultiplier(currency) {
    const currencyMultipliers = {
        0: [
            'BIF',
            'CLP',
            'DJF',
            'GNF',
            'JPY',
            'KMF',
            'KRW',
            'MGA',
            'PYG',
            'RWF',
            'UGX',
            'VND',
            'VUV',
            'XAF',
            'XOF',
            'XPF'
        ],
        3: ['BHD', 'IQD', 'JOD', 'KWD', 'OMR', 'TND']
    };
    currency = currency.toUpperCase();
    let power = 2;
    for (const [key, value] of Object.entries(currencyMultipliers)) {
        if (value.includes(currency)) {
            power = parseInt(key, 10);
            break;
        }
    }
    return Math.pow(10, power);
}
/**
 * Converts an amount to the format required by Stripe based on currency.
 * https://docs.stripe.com/currencies
 * @param {BigNumberInput} amount - The amount to be converted.
 * @param {string} currency - The currency code (e.g., 'USD', 'JOD').
 * @returns {number} - The converted amount in the smallest currency unit.
 */
function getSmallestUnit(amount, currency) {
    const multiplier = getCurrencyMultiplier(currency);
    const amount_ = Math.round(new utils_1.BigNumber(utils_1.MathBN.mult(amount, multiplier)).numeric) /
        multiplier;
    const smallestAmount = new utils_1.BigNumber(utils_1.MathBN.mult(amount_, multiplier));
    let numeric = smallestAmount.numeric;
    // Check if the currency requires rounding to the nearest ten
    if (multiplier === 1e3) {
        numeric = Math.ceil(numeric / 10) * 10;
    }
    return parseInt(numeric.toString().split('.').shift(), 10);
}
/**
 * Converts an amount from the smallest currency unit to the standard unit based on currency.
 * @param {BigNumberInput} amount - The amount in the smallest currency unit.
 * @param {string} currency - The currency code (e.g., 'USD', 'JOD').
 * @returns {number} - The converted amount in the standard currency unit.
 */
function getAmountFromSmallestUnit(amount, currency) {
    const multiplier = getCurrencyMultiplier(currency);
    const standardAmount = new utils_1.BigNumber(utils_1.MathBN.div(amount, multiplier));
    return standardAmount.numeric;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvc2hhcmVkL3V0aWxzL21vbmV5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBNENBLDBDQW1CQztBQVFELDhEQU9DO0FBN0VELHFEQUE2RDtBQUU3RCxTQUFTLHFCQUFxQixDQUFDLFFBQVE7SUFDckMsTUFBTSxtQkFBbUIsR0FBRztRQUMxQixDQUFDLEVBQUU7WUFDRCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1lBQ0wsS0FBSztZQUNMLEtBQUs7WUFDTCxLQUFLO1NBQ047UUFDRCxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztLQUM5QyxDQUFBO0lBRUQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNqQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7SUFDYixLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDL0QsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDN0IsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDekIsTUFBSztRQUNQLENBQUM7SUFDSCxDQUFDO0lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUM1QixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsZUFBZSxDQUM3QixNQUFzQixFQUN0QixRQUFnQjtJQUVoQixNQUFNLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUVsRCxNQUFNLE9BQU8sR0FDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksaUJBQVMsQ0FBQyxjQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNsRSxVQUFVLENBQUE7SUFFWixNQUFNLGNBQWMsR0FBRyxJQUFJLGlCQUFTLENBQUMsY0FBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUV0RSxJQUFJLE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFBO0lBQ3BDLDZEQUE2RDtJQUM3RCxJQUFJLFVBQVUsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN2QixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ3hDLENBQUM7SUFFRCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0FBQzdELENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILFNBQWdCLHlCQUF5QixDQUN2QyxNQUFzQixFQUN0QixRQUFnQjtJQUVoQixNQUFNLFVBQVUsR0FBRyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsRCxNQUFNLGNBQWMsR0FBRyxJQUFJLGlCQUFTLENBQUMsY0FBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUNwRSxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUE7QUFDL0IsQ0FBQyJ9