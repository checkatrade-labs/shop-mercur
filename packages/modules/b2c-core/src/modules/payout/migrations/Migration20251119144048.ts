import { Migration } from '@mikro-orm/migrations'

export class Migration20251119144048 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table if not exists "payment_webhook" ("id" text not null, "provider_id" text not null, "reference" text not null, "raw_payload" jsonb not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "payment_webhook_pkey" primary key ("id"));`
    )
    this.addSql(
      `CREATE INDEX IF NOT EXISTS "IDX_payment_webhook_provider_id" ON "payment_webhook" (provider_id) WHERE deleted_at IS NULL;`
    )
    this.addSql(
      `CREATE INDEX IF NOT EXISTS "IDX_payment_webhook_reference" ON "payment_webhook" (reference) WHERE deleted_at IS NULL;`
    )
    this.addSql(
      `CREATE INDEX IF NOT EXISTS "IDX_payment_webhook_deleted_at" ON "payment_webhook" (deleted_at) WHERE deleted_at IS NULL;`
    )
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "payment_webhook" cascade;`)
  }
}
