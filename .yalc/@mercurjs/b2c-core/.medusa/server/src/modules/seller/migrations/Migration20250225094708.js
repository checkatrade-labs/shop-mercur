"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250225094708 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250225094708 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "seller_onboarding" ("id" text not null, "store_information" boolean not null default false, "stripe_connection" boolean not null default false, "locations_shipping" boolean not null default false, "products" boolean not null default false, "seller_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "seller_onboarding_pkey" primary key ("id"));');
        this.addSql('alter table if exists "seller_onboarding" add constraint "seller_onboarding_seller_id_unique" unique ("seller_id");');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_seller_onboarding_seller_id" ON "seller_onboarding" (seller_id) WHERE deleted_at IS NULL;');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_seller_onboarding_deleted_at" ON "seller_onboarding" (deleted_at) WHERE deleted_at IS NULL;');
        this.addSql('alter table if exists "seller_onboarding" add constraint "seller_onboarding_seller_id_foreign" foreign key ("seller_id") references "seller" ("id") on update cascade;');
    }
    async down() {
        this.addSql('drop table if exists "seller_onboarding" cascade;');
    }
}
exports.Migration20250225094708 = Migration20250225094708;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAyMjUwOTQ3MDguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zZWxsZXIvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDIyNTA5NDcwOC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBaUQ7QUFFakQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUNwRCxLQUFLLENBQUMsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQ1Qsa2VBQWtlLENBQ25lLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUNULHFIQUFxSCxDQUN0SCxDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FDVCwySEFBMkgsQ0FDNUgsQ0FBQTtRQUNELElBQUksQ0FBQyxNQUFNLENBQ1QsNkhBQTZILENBQzlILENBQUE7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUNULHdLQUF3SyxDQUN6SyxDQUFBO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtREFBbUQsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7Q0FDRjtBQXZCRCwwREF1QkMifQ==