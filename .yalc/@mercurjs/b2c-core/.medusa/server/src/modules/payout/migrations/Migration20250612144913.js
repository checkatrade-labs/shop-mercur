"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250612144913 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250612144913 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "payout_reversal" ("id" text not null, "currency_code" text not null, "amount" numeric not null, "data" jsonb null, "payout_id" text not null, "raw_amount" jsonb not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "payout_reversal_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_payout_reversal_payout_id" ON "payout_reversal" (payout_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_payout_reversal_deleted_at" ON "payout_reversal" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`alter table if exists "payout_reversal" add constraint "payout_reversal_payout_id_foreign" foreign key ("payout_id") references "payout" ("id") on update cascade;`);
    }
    async down() {
        this.addSql(`alter table if exists "payout_reversal" drop constraint if exists "payout_reversal_payout_id_foreign";`);
        this.addSql(`drop table if exists "payout_reversal" cascade;`);
    }
}
exports.Migration20250612144913 = Migration20250612144913;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA2MTIxNDQ5MTMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wYXlvdXQvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDYxMjE0NDkxMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBaUQ7QUFFakQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUMzQyxLQUFLLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQ1QsZ1lBQWdZLENBQ2pZLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUNULHVIQUF1SCxDQUN4SCxDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FDVCx5SEFBeUgsQ0FDMUgsQ0FBQTtRQUVELElBQUksQ0FBQyxNQUFNLENBQ1Qsb0tBQW9LLENBQ3JLLENBQUE7SUFDSCxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FDVCx3R0FBd0csQ0FDekcsQ0FBQTtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsaURBQWlELENBQUMsQ0FBQTtJQUNoRSxDQUFDO0NBQ0Y7QUF4QkQsMERBd0JDIn0=