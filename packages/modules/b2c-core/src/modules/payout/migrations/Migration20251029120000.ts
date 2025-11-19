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
      `create table if not exists "payment_webhook" ("id" text not null, "provider_id" text not null, "reference" text not null, "raw_payload" jsonb not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "payment_webhook_pkey" primary key ("id"));`
    )
    this.addSql(
      `CREATE INDEX IF NOT EXISTS "IDX_payment_webhook_provider_id" ON "payment_webhook" (provider_id) WHERE deleted_at IS NULL;`
    )
    this.addSql(
      `CREATE INDEX IF NOT EXISTS "IDX_payment_webhook_reference" ON "payment_webhook" (reference) WHERE deleted_at IS NULL;`
    )
  }

  override async down(): Promise<void> {
    this.addSql(
      `drop index if exists "IDX_payment_webhook_reference";`
    )
    this.addSql(
      `drop index if exists "IDX_payment_webhook_provider_id";`
    )
    this.addSql(`drop table if exists "payment_webhook" cascade;`)
    this.addSql(
      `drop index if exists "IDX_payout_account_payment_provider_id";`
    )
    this.addSql(
      `alter table if exists "payout_account" drop column if exists "payment_provider_id";`
    )
  }
}
