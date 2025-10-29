"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250828065431 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250828065431 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "attribute" add column if not exists "is_required" boolean not null default false;`);
    }
    async down() {
        this.addSql(`alter table if exists "attribute" drop column if exists "is_required";`);
    }
}
exports.Migration20250828065431 = Migration20250828065431;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA4MjgwNjU0MzEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hdHRyaWJ1dGUvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDgyODA2NTQzMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUUzQyxLQUFLLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsMEdBQTBHLENBQUMsQ0FBQztJQUMxSCxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7Q0FFRjtBQVZELDBEQVVDIn0=