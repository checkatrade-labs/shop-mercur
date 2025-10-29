"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250225083755 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250225083755 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table if exists "seller" add column if not exists "address_line" text null, add column if not exists "city" text null, add column if not exists "postal_code" text null, add column if not exists "country_code" text null, add column if not exists "tax_id" text null;');
        this.addSql('alter table if exists "member_invite" alter column "email" type text using ("email"::text);');
        this.addSql('alter table if exists "member_invite" alter column "email" set not null;');
        this.addSql('alter table if exists "member" alter column "email" type text using ("email"::text);');
        this.addSql('alter table if exists "member" alter column "email" drop not null;');
    }
    async down() {
        this.addSql('alter table if exists "seller" drop column if exists "address_line";');
        this.addSql('alter table if exists "seller" drop column if exists "city";');
        this.addSql('alter table if exists "seller" drop column if exists "postal_code";');
        this.addSql('alter table if exists "seller" drop column if exists "country_code";');
        this.addSql('alter table if exists "seller" drop column if exists "tax_id";');
        this.addSql('alter table if exists "member_invite" alter column "email" type text using ("email"::text);');
        this.addSql('alter table if exists "member_invite" alter column "email" drop not null;');
        this.addSql('alter table if exists "member" alter column "email" type text using ("email"::text);');
        this.addSql('alter table if exists "member" alter column "email" set not null;');
    }
}
exports.Migration20250225083755 = Migration20250225083755;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAyMjUwODM3NTUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zZWxsZXIvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDIyNTA4Mzc1NS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUVwRCxLQUFLLENBQUMsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsZ1JBQWdSLENBQUMsQ0FBQztRQUU5UixJQUFJLENBQUMsTUFBTSxDQUFDLDZGQUE2RixDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLE1BQU0sQ0FBQywwRUFBMEUsQ0FBQyxDQUFDO1FBRXhGLElBQUksQ0FBQyxNQUFNLENBQUMsc0ZBQXNGLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9FQUFvRSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxNQUFNLENBQUMsOERBQThELENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLHFFQUFxRSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxNQUFNLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUU5RSxJQUFJLENBQUMsTUFBTSxDQUFDLDZGQUE2RixDQUFDLENBQUM7UUFDM0csSUFBSSxDQUFDLE1BQU0sQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO1FBRXpGLElBQUksQ0FBQyxNQUFNLENBQUMsc0ZBQXNGLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsTUFBTSxDQUFDLG1FQUFtRSxDQUFDLENBQUM7SUFDbkYsQ0FBQztDQUVGO0FBMUJELDBEQTBCQyJ9