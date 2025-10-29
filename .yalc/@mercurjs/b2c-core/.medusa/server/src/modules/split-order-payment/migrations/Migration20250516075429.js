"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250516075429 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250516075429 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "split_order_payment" ("id" text not null, "status" text not null, "currency_code" text not null, "authorized_amount" numeric not null, "captured_amount" numeric not null, "refunded_amount" numeric not null, "payment_collection_id" text not null, "raw_authorized_amount" jsonb not null, "raw_captured_amount" jsonb not null, "raw_refunded_amount" jsonb not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "split_order_payment_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_split_order_payment_deleted_at" ON "split_order_payment" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "split_order_payment" cascade;`);
    }
}
exports.Migration20250516075429 = Migration20250516075429;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA1MTYwNzU0MjkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zcGxpdC1vcmRlci1wYXltZW50L21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTA1MTYwNzU0MjkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLG1rQkFBbWtCLENBQUMsQ0FBQztRQUNqbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpSUFBaUksQ0FBQyxDQUFDO0lBQ2pKLENBQUM7SUFFUSxLQUFLLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7SUFDckUsQ0FBQztDQUVGO0FBWEQsMERBV0MifQ==