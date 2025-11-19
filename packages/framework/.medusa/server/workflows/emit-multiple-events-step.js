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
//# sourceMappingURL=emit-multiple-events-step.js.map