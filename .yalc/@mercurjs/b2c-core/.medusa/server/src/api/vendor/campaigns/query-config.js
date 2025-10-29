"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorCampaignQueryConfig = exports.vendorCampaignFields = void 0;
exports.vendorCampaignFields = [
    'id',
    'name',
    'description',
    'currency',
    'campaign_identifier',
    '*budget',
    'starts_at',
    'ends_at',
    'created_at',
    'updated_at',
    'deleted_at'
];
exports.vendorCampaignQueryConfig = {
    list: {
        defaults: exports.vendorCampaignFields,
        isList: true
    },
    retrieve: {
        defaults: exports.vendorCampaignFields,
        isList: false
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FwaS92ZW5kb3IvY2FtcGFpZ25zL3F1ZXJ5LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLG9CQUFvQixHQUFHO0lBQ2xDLElBQUk7SUFDSixNQUFNO0lBQ04sYUFBYTtJQUNiLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsU0FBUztJQUNULFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0NBQ2IsQ0FBQTtBQUVZLFFBQUEseUJBQXlCLEdBQUc7SUFDdkMsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLDRCQUFvQjtRQUM5QixNQUFNLEVBQUUsSUFBSTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsUUFBUSxFQUFFLDRCQUFvQjtRQUM5QixNQUFNLEVBQUUsS0FBSztLQUNkO0NBQ0YsQ0FBQSJ9