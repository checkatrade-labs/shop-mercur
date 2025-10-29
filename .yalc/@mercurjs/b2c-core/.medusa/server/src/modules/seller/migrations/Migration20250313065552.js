"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250313065552 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250313065552 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "seller_onboarding" drop constraint if exists "seller_onboarding_seller_id_unique";`);
        this.addSql(`drop index if exists "seller_onboarding_seller_id_unique";`);
        this.addSql(`drop index if exists "IDX_seller_onboarding_seller_id";`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_seller_onboarding_seller_id_unique" ON "seller_onboarding" (seller_id) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop index if exists "IDX_seller_onboarding_seller_id_unique";`);
        this.addSql(`alter table if exists "seller_onboarding" add constraint "seller_onboarding_seller_id_unique" unique ("seller_id");`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_seller_onboarding_seller_id" ON "seller_onboarding" (seller_id) WHERE deleted_at IS NULL;`);
    }
}
exports.Migration20250313065552 = Migration20250313065552;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAzMTMwNjU1NTIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zZWxsZXIvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDMxMzA2NTU1Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUUzQyxLQUFLLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsMkdBQTJHLENBQUMsQ0FBQztRQUN6SCxJQUFJLENBQUMsTUFBTSxDQUFDLDREQUE0RCxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1FBRXZFLElBQUksQ0FBQyxNQUFNLENBQUMseUlBQXlJLENBQUMsQ0FBQztJQUN6SixDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO1FBRTlFLElBQUksQ0FBQyxNQUFNLENBQUMscUhBQXFILENBQUMsQ0FBQztRQUNuSSxJQUFJLENBQUMsTUFBTSxDQUFDLDJIQUEySCxDQUFDLENBQUM7SUFDM0ksQ0FBQztDQUVGO0FBakJELDBEQWlCQyJ9