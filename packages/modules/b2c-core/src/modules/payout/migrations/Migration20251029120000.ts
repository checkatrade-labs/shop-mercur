import { Migration } from '@mikro-orm/migrations'

export class Migration20251029120000 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `alter table if exists "payout_account" add column if not exists "payment_provider_id" text null;`
    )
    this.addSql(
      `CREATE INDEX IF NOT EXISTS "IDX_payout_account_payment_provider_id" ON "payout_account" (payment_provider_id) WHERE deleted_at IS NULL;`
    )
    this.addSql(
      `alter table if exists "payout_account" add constraint "payout_account_payment_provider_id_foreign" foreign key ("payment_provider_id") references "payment_provider" ("id") on update cascade on delete set null;`
    )
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table if exists "payout_account" drop constraint if exists "payout_account_payment_provider_id_foreign";`
    )
    this.addSql(
      `drop index if exists "IDX_payout_account_payment_provider_id";`
    )
    this.addSql(
      `alter table if exists "payout_account" drop column if exists "payment_provider_id";`
    )
  }
}
