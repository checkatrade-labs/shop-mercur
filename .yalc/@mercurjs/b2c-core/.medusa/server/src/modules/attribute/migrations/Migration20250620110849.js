"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250620110849 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250620110849 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "attribute" add column if not exists "is_filterable" boolean not null default true;`);
    }
    async down() {
        this.addSql(`alter table if exists "attribute" drop column if exists "is_filterable";`);
    }
}
exports.Migration20250620110849 = Migration20250620110849;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA2MjAxMTA4NDkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hdHRyaWJ1dGUvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDYyMDExMDg0OS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUUzQyxLQUFLLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsMkdBQTJHLENBQUMsQ0FBQztJQUMzSCxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQywwRUFBMEUsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Q0FFRjtBQVZELDBEQVVDIn0=