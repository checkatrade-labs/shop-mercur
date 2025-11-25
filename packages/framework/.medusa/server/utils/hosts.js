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
//# sourceMappingURL=hosts.js.map