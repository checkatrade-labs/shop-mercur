import AttributeModuleService from "./service";
export declare const ATTRIBUTE_MODULE = "attribute";
export { AttributeModuleService };
declare const _default: import("@medusajs/types").ModuleExports<typeof AttributeModuleService> & {
    linkable: {
        readonly attribute: {
            id: {
                serviceName: "attribute";
                field: "attribute";
                linkable: "attribute_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "attribute";
                field: "attribute";
                linkable: "attribute_id";
                primaryKey: "id";
            };
        };
        readonly attributeValue: {
            id: {
                serviceName: "attribute";
                field: "attributeValue";
                linkable: "attribute_value_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "attribute";
                field: "attributeValue";
                linkable: "attribute_value_id";
                primaryKey: "id";
            };
        };
        readonly attributePossibleValue: {
            id: {
                serviceName: "attribute";
                field: "attributePossibleValue";
                linkable: "attribute_possible_value_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "attribute";
                field: "attributePossibleValue";
                linkable: "attribute_possible_value_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
