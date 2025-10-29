"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("../../utils");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { productIds, count } = await (0, utils_2.filterSellerProductsByCollection)(req.scope, req.params.id, req.filterableFields.seller_id, req.queryConfig.pagination?.skip || 0, req.queryConfig.pagination?.take || 10);
    const { data: products } = await query.graph({
        entity: 'product',
        fields: req.queryConfig.fields,
        filters: {
            id: productIds
        }
    });
    res.json({
        products,
        count,
        offset: req.queryConfig.pagination?.skip || 0,
        limit: req.queryConfig.pagination?.take || 10
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3ZlbmRvci9wcm9kdWN0LWNvbGxlY3Rpb25zL1tpZF0vcHJvZHVjdHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQXFFO0FBRXJFLHVDQUE4RDtBQUV2RCxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sSUFBQSx3Q0FBZ0MsRUFDbEUsR0FBRyxDQUFDLEtBQUssRUFDVCxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFDYixHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBbUIsRUFDeEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFDckMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FDdkMsQ0FBQTtJQUVELE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzNDLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU07UUFDOUIsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLFVBQVU7U0FDZjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxRQUFRO1FBQ1IsS0FBSztRQUNMLE1BQU0sRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBQztRQUM3QyxLQUFLLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUU7S0FDOUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBNUJZLFFBQUEsR0FBRyxPQTRCZiJ9