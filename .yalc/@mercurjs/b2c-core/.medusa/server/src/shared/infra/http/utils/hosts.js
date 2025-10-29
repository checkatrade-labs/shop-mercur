"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildInviteUrl = exports.buildResetPasswordUrl = exports.buildHostAddress = exports.actorTypeToHost = exports.hostTypeToResetPasswordPath = exports.defaultHosts = exports.Hosts = void 0;
var Hosts;
(function (Hosts) {
    Hosts["VENDOR_PANEL"] = "VENDOR_PANEL_URL";
    Hosts["STOREFRONT"] = "STOREFRONT_URL";
    Hosts["BACKEND"] = "BACKEND_URL";
})(Hosts || (exports.Hosts = Hosts = {}));
exports.defaultHosts = {
    [Hosts.VENDOR_PANEL]: 'http://localhost:5173',
    [Hosts.STOREFRONT]: 'http://localhost:3000',
    [Hosts.BACKEND]: 'http://localhost:9000'
};
exports.hostTypeToResetPasswordPath = {
    [Hosts.VENDOR_PANEL]: '/reset-password',
    [Hosts.STOREFRONT]: '/reset-password',
    [Hosts.BACKEND]: '/app/reset-password'
};
exports.actorTypeToHost = {
    ['customer']: Hosts.STOREFRONT,
    ['seller']: Hosts.VENDOR_PANEL,
    ['user']: Hosts.BACKEND
};
const buildHostAddress = (hostType, path) => {
    return new URL(path || '', process.env[hostType] || exports.defaultHosts[hostType]);
};
exports.buildHostAddress = buildHostAddress;
const buildResetPasswordUrl = (hostType, token) => {
    const url = (0, exports.buildHostAddress)(hostType, exports.hostTypeToResetPasswordPath[hostType]);
    if (token) {
        url.searchParams.set('token', token);
    }
    return url;
};
exports.buildResetPasswordUrl = buildResetPasswordUrl;
const buildInviteUrl = (token) => {
    const url = (0, exports.buildHostAddress)(Hosts.VENDOR_PANEL, '/invite');
    url.searchParams.set('token', token);
    return url;
};
exports.buildInviteUrl = buildInviteUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvc2hhcmVkL2luZnJhL2h0dHAvdXRpbHMvaG9zdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBWSxLQUlYO0FBSkQsV0FBWSxLQUFLO0lBQ2YsMENBQWlDLENBQUE7SUFDakMsc0NBQTZCLENBQUE7SUFDN0IsZ0NBQXVCLENBQUE7QUFDekIsQ0FBQyxFQUpXLEtBQUsscUJBQUwsS0FBSyxRQUloQjtBQUVZLFFBQUEsWUFBWSxHQUFHO0lBQzFCLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLHVCQUF1QjtJQUM3QyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSx1QkFBdUI7SUFDM0MsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsdUJBQXVCO0NBQ3pDLENBQUE7QUFFWSxRQUFBLDJCQUEyQixHQUFHO0lBQ3pDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLGlCQUFpQjtJQUN2QyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxpQkFBaUI7SUFDckMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUscUJBQXFCO0NBQ3ZDLENBQUE7QUFFWSxRQUFBLGVBQWUsR0FBRztJQUM3QixDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVO0lBQzlCLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLFlBQVk7SUFDOUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTztDQUN4QixDQUFBO0FBRU0sTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFFBQWUsRUFBRSxJQUFhLEVBQUUsRUFBRTtJQUNqRSxPQUFPLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxvQkFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7QUFDN0UsQ0FBQyxDQUFBO0FBRlksUUFBQSxnQkFBZ0Isb0JBRTVCO0FBRU0sTUFBTSxxQkFBcUIsR0FBRyxDQUFDLFFBQWUsRUFBRSxLQUFjLEVBQUUsRUFBRTtJQUN2RSxNQUFNLEdBQUcsR0FBRyxJQUFBLHdCQUFnQixFQUFDLFFBQVEsRUFBRSxtQ0FBMkIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBRTdFLElBQUksS0FBSyxFQUFFLENBQUM7UUFDVixHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVELE9BQU8sR0FBRyxDQUFBO0FBQ1osQ0FBQyxDQUFBO0FBUlksUUFBQSxxQkFBcUIseUJBUWpDO0FBRU0sTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUM5QyxNQUFNLEdBQUcsR0FBRyxJQUFBLHdCQUFnQixFQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFDM0QsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBRXBDLE9BQU8sR0FBRyxDQUFBO0FBQ1osQ0FBQyxDQUFBO0FBTFksUUFBQSxjQUFjLGtCQUsxQiJ9