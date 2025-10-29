"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250307091819 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250307091819 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table if exists "seller" add column if not exists "email" text null, add column if not exists "phone" text null, add column if not exists "state" text null;');
    }
    async down() {
        this.addSql('alter table if exists "seller" drop column if exists "email";');
        this.addSql('alter table if exists "seller" drop column if exists "phone";');
        this.addSql('alter table if exists "seller" drop column if exists "state";');
    }
}
exports.Migration20250307091819 = Migration20250307091819;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAzMDcwOTE4MTkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zZWxsZXIvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDMwNzA5MTgxOS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUVwRCxLQUFLLENBQUMsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsb0tBQW9LLENBQUMsQ0FBQztJQUNwTCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLCtEQUErRCxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLE1BQU0sQ0FBQywrREFBK0QsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMsK0RBQStELENBQUMsQ0FBQztJQUMvRSxDQUFDO0NBRUY7QUFaRCwwREFZQyJ9