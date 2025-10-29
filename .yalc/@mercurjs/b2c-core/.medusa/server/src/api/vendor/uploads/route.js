"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const POST = async (req, res) => {
    const input = req.files;
    if (!input?.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, 'No files were uploaded');
    }
    const { result: files } = await (0, core_flows_1.uploadFilesWorkflow)(req.scope).run({
        input: {
            files: input?.map((f) => ({
                filename: f.originalname,
                mimeType: f.mimetype,
                content: f.buffer.toString('binary'),
                access: 'public'
            }))
        }
    });
    res.json({ files });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci91cGxvYWRzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUEwRDtBQU0xRCxxREFBdUQ7QUFFaEQsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUEwRCxFQUMxRCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUksR0FBVyxDQUFDLEtBQUssQ0FBQTtJQUVoQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBQ25CLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLHdCQUF3QixDQUN6QixDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxJQUFBLGdDQUFtQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDakUsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSxDQUFDLENBQUMsWUFBWTtnQkFDeEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO2dCQUNwQixPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUNwQyxNQUFNLEVBQUUsUUFBUTthQUNqQixDQUFDLENBQUM7U0FDSjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0FBQ3JCLENBQUMsQ0FBQTtBQXpCWSxRQUFBLElBQUksUUF5QmhCIn0=