type SplitAndCompleteCartWorkflowInput = {
    id: string;
};
export declare const splitAndCompleteCartWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<SplitAndCompleteCartWorkflowInput, {
    id: any;
}, [import("@medusajs/workflows-sdk").Hook<"orderSetCreated", {
    orderSetId: any;
}, unknown>]>;
export {};
