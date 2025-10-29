export declare const getFormattedOrderSetListWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<{
    fields?: string[];
    filters?: Record<string, any>;
    pagination?: {
        skip: number;
        take?: number;
        order?: Record<string, any>;
    };
}, {
    data: import("@medusajs/framework/workflows-sdk").WorkflowData<import("@mercurjs/framework").FormattedOrderSetDTO[]>;
    metadata: ((import("@medusajs/types").RemoteQueryFunctionReturnPagination | import("@medusajs/framework/workflows-sdk").WorkflowData<import("@medusajs/types").RemoteQueryFunctionReturnPagination | undefined>) & import("@medusajs/types").RemoteQueryFunctionReturnPagination) | undefined;
}, []>;
