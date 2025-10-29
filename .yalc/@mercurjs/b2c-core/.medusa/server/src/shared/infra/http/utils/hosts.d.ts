export declare enum Hosts {
    VENDOR_PANEL = "VENDOR_PANEL_URL",
    STOREFRONT = "STOREFRONT_URL",
    BACKEND = "BACKEND_URL"
}
export declare const defaultHosts: {
    VENDOR_PANEL_URL: string;
    STOREFRONT_URL: string;
    BACKEND_URL: string;
};
export declare const hostTypeToResetPasswordPath: {
    VENDOR_PANEL_URL: string;
    STOREFRONT_URL: string;
    BACKEND_URL: string;
};
export declare const actorTypeToHost: {
    customer: Hosts;
    seller: Hosts;
    user: Hosts;
};
export declare const buildHostAddress: (hostType: Hosts, path?: string) => URL;
export declare const buildResetPasswordUrl: (hostType: Hosts, token?: string) => URL;
export declare const buildInviteUrl: (token: string) => URL;
