"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20241207151814 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20241207151814 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "order_set" ("id" text not null, "display_id" serial, "sales_channel_id" text not null, "cart_id" text not null, "customer_id" text null, "payment_collection_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "order_set_pkey" primary key ("id"));');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_order_set_deleted_at" ON "order_set" (deleted_at) WHERE deleted_at IS NULL;');
    }
    async down() {
        this.addSql('drop table if exists "order_set" cascade;');
    }
}
exports.Migration20241207151814 = Migration20241207151814;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNDEyMDcxNTE4MTQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tYXJrZXRwbGFjZS9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjQxMjA3MTUxODE0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFpRDtBQUVqRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBQ3BELEtBQUssQ0FBQyxFQUFFO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FDVCwrWEFBK1gsQ0FDaFksQ0FBQTtRQUNELElBQUksQ0FBQyxNQUFNLENBQ1QsNkdBQTZHLENBQzlHLENBQUE7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLDJDQUEyQyxDQUFDLENBQUE7SUFDMUQsQ0FBQztDQUNGO0FBYkQsMERBYUMifQ==