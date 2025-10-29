"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitMultipleEventsStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.emitMultipleEventsStep = (0, workflows_sdk_1.createStep)('emit-multiple-events', async (input, { container }) => {
    const event_bus = container.resolve(utils_1.Modules.EVENT_BUS);
    const events = input.map((event) => event_bus.emit(event));
    await Promise.all(events);
    return new workflows_sdk_1.StepResponse();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1pdC1tdWx0aXBsZS1ldmVudHMtc3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY29tbW9uL3N0ZXBzL2VtaXQtbXVsdGlwbGUtZXZlbnRzLXN0ZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQW1EO0FBQ25ELHFFQUE0RTtBQU8vRCxRQUFBLHNCQUFzQixHQUFHLElBQUEsMEJBQVUsRUFDOUMsc0JBQXNCLEVBQ3RCLEtBQUssRUFBRSxLQUFjLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3RDLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRXRELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUMxRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFFekIsT0FBTyxJQUFJLDRCQUFZLEVBQUUsQ0FBQTtBQUMzQixDQUFDLENBQ0YsQ0FBQSJ9