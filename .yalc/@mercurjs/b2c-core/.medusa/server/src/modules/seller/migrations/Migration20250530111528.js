"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250530111528 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250530111528 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "seller" add column if not exists "store_status" text check ("store_status" in ('ACTIVE', 'INACTIVE', 'SUSPENDED')) not null default 'ACTIVE';`);
    }
    async down() {
        this.addSql(`alter table if exists "seller" drop column if exists "store_status";`);
    }
}
exports.Migration20250530111528 = Migration20250530111528;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA1MzAxMTE1MjguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zZWxsZXIvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDUzMDExMTUyOC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUUzQyxLQUFLLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsc0tBQXNLLENBQUMsQ0FBQztJQUN0TCxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7Q0FFRjtBQVZELDBEQVVDIn0=