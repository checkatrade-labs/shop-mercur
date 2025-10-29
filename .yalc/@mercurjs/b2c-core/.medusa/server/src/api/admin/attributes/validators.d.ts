import { z } from "zod";
declare enum AttributeUIComponent {
    SELECT = "select",
    MULTIVALUE = "multivalue",
    UNIT = "unit",
    TOGGLE = "toggle",
    TEXTAREA = "text_area",
    COLOR_PICKER = "color_picker"
}
export type AdminGetAttributeValueParamsType = z.infer<typeof AdminGetAttributeValueParams>;
export declare const AdminGetAttributeValueParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetAttributeValuesParamsType = z.infer<typeof AdminGetAttributeValueParams>;
export declare const AdminGetAttributeValuesParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
    with_deleted: z.ZodEffects<z.ZodOptional<z.ZodBoolean>, boolean | undefined, unknown>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
    with_deleted?: boolean | undefined;
}, {
    fields?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    order?: string | undefined;
    with_deleted?: unknown;
}>;
export type AdminGetAttributeParamsType = z.infer<typeof AdminGetAttributeParams>;
export declare const AdminGetAttributeParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const GetAttributesParams: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    handle: z.ZodOptional<z.ZodString>;
    is_required: z.ZodOptional<z.ZodBoolean>;
    is_filterable: z.ZodOptional<z.ZodBoolean>;
    created_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    updated_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    deleted_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    ui_component: z.ZodOptional<z.ZodNativeEnum<typeof AttributeUIComponent>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    name?: string | undefined;
    handle?: string | undefined;
    is_required?: boolean | undefined;
    is_filterable?: boolean | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    ui_component?: AttributeUIComponent | undefined;
}, {
    id?: string | undefined;
    name?: string | undefined;
    handle?: string | undefined;
    is_required?: boolean | undefined;
    is_filterable?: boolean | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    ui_component?: AttributeUIComponent | undefined;
}>;
export type AdminGetAttributesParamsType = z.infer<typeof AdminGetAttributesParams>;
export declare const AdminGetAttributesParams: z.ZodObject<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    handle: z.ZodOptional<z.ZodString>;
    is_required: z.ZodOptional<z.ZodBoolean>;
    is_filterable: z.ZodOptional<z.ZodBoolean>;
    created_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    updated_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    deleted_at: z.ZodOptional<z.ZodUnion<[any, z.ZodObject<{
        $eq: any;
        $ne: any;
        $in: any;
        $nin: any;
        $like: any;
        $ilike: any;
        $re: any;
        $contains: any;
        $gt: any;
        $gte: any;
        $lt: any;
        $lte: any;
    }, "strip", z.ZodTypeAny, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }, {
        $eq?: any;
        $ne?: any;
        $in?: any;
        $nin?: any;
        $like?: any;
        $ilike?: any;
        $re?: any;
        $contains?: any;
        $gt?: any;
        $gte?: any;
        $lt?: any;
        $lte?: any;
    }>]>>;
    ui_component: z.ZodOptional<z.ZodNativeEnum<typeof AttributeUIComponent>>;
}, "strip", z.ZodTypeAny, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    id?: string | undefined;
    name?: string | undefined;
    handle?: string | undefined;
    is_required?: boolean | undefined;
    is_filterable?: boolean | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    ui_component?: AttributeUIComponent | undefined;
}, {
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
    id?: string | undefined;
    name?: string | undefined;
    handle?: string | undefined;
    is_required?: boolean | undefined;
    is_filterable?: boolean | undefined;
    created_at?: any;
    updated_at?: any;
    deleted_at?: any;
    ui_component?: AttributeUIComponent | undefined;
}>;
export type AdminCreateAttributeValueType = z.infer<typeof AdminCreateAttributeValue>;
export declare const AdminCreateAttributeValue: z.ZodObject<{
    value: z.ZodString;
    rank: z.ZodNumber;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    value: string;
    rank: number;
    metadata?: Record<string, unknown> | undefined;
}, {
    value: string;
    rank: number;
    metadata?: Record<string, unknown> | undefined;
}>;
export type AdminUpdateAttributeValueType = z.infer<typeof AdminUpdateAttributeValue>;
export declare const AdminUpdateAttributeValue: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
    rank: z.ZodOptional<z.ZodNumber>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    value?: string | undefined;
    rank?: number | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    id?: string | undefined;
    value?: string | undefined;
    rank?: number | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export type AdminUpdateAttributeType = z.infer<typeof AdminUpdateAttribute>;
export declare const AdminUpdateAttribute: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    handle: z.ZodOptional<z.ZodString>;
    is_filterable: z.ZodOptional<z.ZodBoolean>;
    is_required: z.ZodOptional<z.ZodBoolean>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    ui_component: z.ZodOptional<z.ZodNativeEnum<typeof AttributeUIComponent>>;
    product_category_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    possible_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodString>;
        rank: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        value?: string | undefined;
        rank?: number | undefined;
        metadata?: Record<string, unknown> | undefined;
    }, {
        id?: string | undefined;
        value?: string | undefined;
        rank?: number | undefined;
        metadata?: Record<string, unknown> | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
    handle?: string | undefined;
    is_filterable?: boolean | undefined;
    is_required?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
    ui_component?: AttributeUIComponent | undefined;
    product_category_ids?: string[] | undefined;
    possible_values?: {
        id?: string | undefined;
        value?: string | undefined;
        rank?: number | undefined;
        metadata?: Record<string, unknown> | undefined;
    }[] | undefined;
}, {
    name?: string | undefined;
    description?: string | undefined;
    handle?: string | undefined;
    is_filterable?: boolean | undefined;
    is_required?: boolean | undefined;
    metadata?: Record<string, unknown> | undefined;
    ui_component?: AttributeUIComponent | undefined;
    product_category_ids?: string[] | undefined;
    possible_values?: {
        id?: string | undefined;
        value?: string | undefined;
        rank?: number | undefined;
        metadata?: Record<string, unknown> | undefined;
    }[] | undefined;
}>;
export type AdminCreateAttributeType = z.infer<typeof CreateAttribute>;
export declare const CreateAttribute: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    is_filterable: z.ZodOptional<z.ZodBoolean>;
    is_required: z.ZodOptional<z.ZodBoolean>;
    ui_component: z.ZodDefault<z.ZodNativeEnum<typeof AttributeUIComponent>>;
    handle: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    possible_values: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        rank: z.ZodNumber;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        rank: number;
        metadata?: Record<string, unknown> | undefined;
    }, {
        value: string;
        rank: number;
        metadata?: Record<string, unknown> | undefined;
    }>, "many">>;
    product_category_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    ui_component: AttributeUIComponent;
    description?: string | undefined;
    is_filterable?: boolean | undefined;
    is_required?: boolean | undefined;
    handle?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    possible_values?: {
        value: string;
        rank: number;
        metadata?: Record<string, unknown> | undefined;
    }[] | undefined;
    product_category_ids?: string[] | undefined;
}, {
    name: string;
    description?: string | undefined;
    is_filterable?: boolean | undefined;
    is_required?: boolean | undefined;
    ui_component?: AttributeUIComponent | undefined;
    handle?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    possible_values?: {
        value: string;
        rank: number;
        metadata?: Record<string, unknown> | undefined;
    }[] | undefined;
    product_category_ids?: string[] | undefined;
}>;
export declare const AdminCreateAttribute: (additionalDataValidator?: z.ZodOptional<z.ZodNullable<z.ZodObject<any, any>>>) => z.ZodObject<any, any, z.ZodTypeAny, {
    [x: string]: any;
}, {
    [x: string]: any;
}> | z.ZodEffects<any, any, any>;
export {};
