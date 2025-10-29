import TaxCodeService from "./service";
export declare const TAX_CODE_MODULE = "taxcode";
export { TaxCodeService };
declare const _default: import("@medusajs/types").ModuleExports<typeof TaxCodeService> & {
    linkable: {
        readonly taxCode: {
            id: {
                serviceName: "taxcode";
                field: "taxCode";
                linkable: "tax_code_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "taxcode";
                field: "taxCode";
                linkable: "tax_code_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
