"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorProductsMiddlewares = void 0;
const multer_1 = __importDefault(require("multer"));
const framework_1 = require("@medusajs/framework");
const framework_2 = require("@mercurjs/framework");
const seller_product_1 = __importDefault(require("../../../links/seller-product"));
const middlewares_1 = require("../../../shared/infra/http/middlewares");
const middlewares_2 = require("../../../shared/infra/http/middlewares");
const query_config_1 = require("../attributes/query-config");
const validators_1 = require("../attributes/validators");
const query_config_2 = require("./query-config");
const validators_2 = require("./validators");
const canVendorCreateProduct = [
    (0, middlewares_2.checkConfigurationRule)(framework_2.ConfigurationRuleType.GLOBAL_PRODUCT_CATALOG, false),
    (0, middlewares_2.checkConfigurationRule)(framework_2.ConfigurationRuleType.PRODUCT_REQUEST_ENABLED, true),
];
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
exports.vendorProductsMiddlewares = [
    {
        method: ["GET"],
        matcher: "/vendor/products",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetProductParams, query_config_2.vendorProductQueryConfig.list),
            (0, middlewares_1.filterBySellerId)(),
        ],
    },
    {
        method: ["POST"],
        matcher: "/vendor/products",
        middlewares: [
            ...canVendorCreateProduct,
            (0, framework_1.validateAndTransformBody)(validators_2.VendorCreateProduct),
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetProductParams, query_config_2.vendorProductQueryConfig.retrieve),
        ],
    },
    {
        method: ["POST"],
        matcher: "/vendor/products/export",
        middlewares: [],
    },
    {
        method: ["POST"],
        matcher: "/vendor/products/import",
        middlewares: [
            (0, middlewares_2.checkConfigurationRule)(framework_2.ConfigurationRuleType.PRODUCT_IMPORT_ENABLED, true),
            upload.single("file"),
        ],
    },
    {
        method: ["GET"],
        matcher: "/vendor/products/:id",
        middlewares: [
            (0, framework_1.unlessPath)(/.*\/products\/(export|import)/, (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_product_1.default.entryPoint,
                filterField: "product_id",
            })),
            (0, framework_1.unlessPath)(/.*\/products\/(export|import)/, (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetProductParams, query_config_2.vendorProductQueryConfig.retrieve)),
        ],
    },
    {
        method: ["POST"],
        matcher: "/vendor/products/:id",
        middlewares: [
            (0, framework_1.unlessPath)(/.*\/products\/(export|import)/, (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_product_1.default.entryPoint,
                filterField: "product_id",
            })),
            (0, framework_1.unlessPath)(/.*\/products\/(export|import)/, (0, framework_1.validateAndTransformBody)(validators_2.VendorUpdateProduct)),
            (0, framework_1.unlessPath)(/.*\/products\/(export|import)/, (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetProductParams, query_config_2.vendorProductQueryConfig.retrieve)),
        ],
    },
    {
        method: ["POST"],
        matcher: "/vendor/products/:id/variants",
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_product_1.default.entryPoint,
                filterField: "product_id",
            }),
            (0, framework_1.validateAndTransformBody)(validators_2.CreateProductVariant),
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetProductParams, query_config_2.vendorProductQueryConfig.retrieve),
        ],
    },
    {
        method: ["POST"],
        matcher: "/vendor/products/:id/variants/:variant_id",
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_product_1.default.entryPoint,
                filterField: "product_id",
            }),
            (0, framework_1.validateAndTransformBody)(validators_2.UpdateProductVariant),
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetProductParams, query_config_2.vendorProductQueryConfig.retrieve),
        ],
    },
    {
        method: ["DELETE"],
        matcher: "/vendor/products/:id/variants/:variant_id",
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_product_1.default.entryPoint,
                filterField: "product_id",
            }),
        ],
    },
    {
        method: ["POST"],
        matcher: "/vendor/products/:id/options",
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_product_1.default.entryPoint,
                filterField: "product_id",
            }),
            (0, framework_1.validateAndTransformBody)(validators_2.CreateProductOption),
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetProductParams, query_config_2.vendorProductQueryConfig.retrieve),
        ],
    },
    {
        method: ["POST"],
        matcher: "/vendor/products/:id/options/:option_id",
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_product_1.default.entryPoint,
                filterField: "product_id",
            }),
            (0, framework_1.validateAndTransformBody)(validators_2.UpdateProductOption),
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetProductParams, query_config_2.vendorProductQueryConfig.retrieve),
        ],
    },
    {
        method: ["DELETE"],
        matcher: "/vendor/products/:id/options/:option_id",
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_product_1.default.entryPoint,
                filterField: "product_id",
            }),
        ],
    },
    {
        method: ["DELETE"],
        matcher: "/vendor/products/:id",
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_product_1.default.entryPoint,
                filterField: "product_id",
            }),
        ],
    },
    {
        method: ["POST"],
        matcher: "/vendor/products/:id/status",
        middlewares: [
            (0, middlewares_1.checkResourceOwnershipByResourceId)({
                entryPoint: seller_product_1.default.entryPoint,
                filterField: "product_id",
            }),
            (0, framework_1.validateAndTransformBody)(validators_2.VendorUpdateProductStatus),
            (0, framework_1.validateAndTransformQuery)(validators_2.VendorGetProductParams, query_config_2.vendorProductQueryConfig.retrieve),
        ],
    },
    {
        method: ["GET"],
        matcher: "/vendor/products/:id/applicable-attributes",
        middlewares: [
            (0, framework_1.validateAndTransformQuery)(validators_1.VendorGetAttributesParams, query_config_1.retrieveAttributeQueryConfig),
        ],
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0cy9taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBNEI7QUFFNUIsbURBSTZCO0FBRzdCLG1EQUE0RDtBQUU1RCxtRkFBOEQ7QUFDOUQsd0VBR2dEO0FBQ2hELHdFQUFnRjtBQUNoRiw2REFBMEU7QUFDMUUseURBQXFFO0FBQ3JFLGlEQUEwRDtBQUMxRCw2Q0FTc0I7QUFFdEIsTUFBTSxzQkFBc0IsR0FBRztJQUM3QixJQUFBLG9DQUFzQixFQUFDLGlDQUFxQixDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQztJQUMzRSxJQUFBLG9DQUFzQixFQUFDLGlDQUFxQixDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQztDQUM1RSxDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxFQUFDLEVBQUUsT0FBTyxFQUFFLGdCQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRTlDLFFBQUEseUJBQXlCLEdBQXNCO0lBQzFEO1FBQ0UsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixXQUFXLEVBQUU7WUFDWCxJQUFBLHFDQUF5QixFQUN2QixtQ0FBc0IsRUFDdEIsdUNBQXdCLENBQUMsSUFBSSxDQUM5QjtZQUNELElBQUEsOEJBQWdCLEdBQUU7U0FDbkI7S0FDRjtJQUNEO1FBQ0UsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsV0FBVyxFQUFFO1lBQ1gsR0FBRyxzQkFBc0I7WUFDekIsSUFBQSxvQ0FBd0IsRUFBQyxnQ0FBbUIsQ0FBQztZQUM3QyxJQUFBLHFDQUF5QixFQUN2QixtQ0FBc0IsRUFDdEIsdUNBQXdCLENBQUMsUUFBUSxDQUNsQztTQUNGO0tB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