"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250317090626 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250317090626 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "onboarding" drop constraint if exists "onboarding_payout_account_id_unique";`);
        this.addSql(`create table if not exists "payout_account" ("id" text not null, "status" text check ("status" in ('pending', 'active', 'disabled')) not null default 'pending', "reference_id" text not null, "data" jsonb not null, "context" jsonb null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "payout_account_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_payout_account_deleted_at" ON "payout_account" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`create table if not exists "payout" ("id" text not null, "currency_code" text not null, "amount" numeric not null, "data" jsonb null, "payout_account_id" text not null, "raw_amount" jsonb not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "payout_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_payout_payout_account_id" ON "payout" (payout_account_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_payout_deleted_at" ON "payout" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`create table if not exists "onboarding" ("id" text not null, "data" jsonb null, "context" jsonb null, "payout_account_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "onboarding_pkey" primary key ("id"));`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_onboarding_payout_account_id_unique" ON "onboarding" (payout_account_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_onboarding_deleted_at" ON "onboarding" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`alter table if exists "payout" add constraint "payout_payout_account_id_foreign" foreign key ("payout_account_id") references "payout_account" ("id") on update cascade;`);
        this.addSql(`alter table if exists "onboarding" add constraint "onboarding_payout_account_id_foreign" foreign key ("payout_account_id") references "payout_account" ("id") on update cascade;`);
    }
    async down() {
        this.addSql(`alter table if exists "payout" drop constraint if exists "payout_payout_account_id_foreign";`);
        this.addSql(`alter table if exists "onboarding" drop constraint if exists "onboarding_payout_account_id_foreign";`);
        this.addSql(`drop table if exists "payout_account" cascade;`);
        this.addSql(`drop table if exists "payout" cascade;`);
        this.addSql(`drop table if exists "onboarding" cascade;`);
    }
}
exports.Migration20250317090626 = Migration20250317090626;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAzMTcwOTA2MjYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wYXlvdXQvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDMxNzA5MDYyNi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUUzQyxLQUFLLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMscUdBQXFHLENBQUMsQ0FBQztRQUNuSCxJQUFJLENBQUMsTUFBTSxDQUFDLG9hQUFvYSxDQUFDLENBQUM7UUFDbGIsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1SEFBdUgsQ0FBQyxDQUFDO1FBRXJJLElBQUksQ0FBQyxNQUFNLENBQUMsc1hBQXNYLENBQUMsQ0FBQztRQUNwWSxJQUFJLENBQUMsTUFBTSxDQUFDLHFIQUFxSCxDQUFDLENBQUM7UUFDbkksSUFBSSxDQUFDLE1BQU0sQ0FBQyx1R0FBdUcsQ0FBQyxDQUFDO1FBRXJILElBQUksQ0FBQyxNQUFNLENBQUMsNlRBQTZULENBQUMsQ0FBQztRQUMzVSxJQUFJLENBQUMsTUFBTSxDQUFDLDJJQUEySSxDQUFDLENBQUM7UUFDekosSUFBSSxDQUFDLE1BQU0sQ0FBQywrR0FBK0csQ0FBQyxDQUFDO1FBRTdILElBQUksQ0FBQyxNQUFNLENBQUMsMEtBQTBLLENBQUMsQ0FBQztRQUV4TCxJQUFJLENBQUMsTUFBTSxDQUFDLGtMQUFrTCxDQUFDLENBQUM7SUFDbE0sQ0FBQztJQUVRLEtBQUssQ0FBQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsOEZBQThGLENBQUMsQ0FBQztRQUU1RyxJQUFJLENBQUMsTUFBTSxDQUFDLHNHQUFzRyxDQUFDLENBQUM7UUFFcEgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxNQUFNLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsTUFBTSxDQUFDLDRDQUE0QyxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUVGO0FBaENELDBEQWdDQyJ9