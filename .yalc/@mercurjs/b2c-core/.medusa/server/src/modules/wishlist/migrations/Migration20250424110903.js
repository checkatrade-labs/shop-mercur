"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250424110903 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250424110903 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "wishlist" ("id" text not null, "reference" text check ("reference" in ('product')) not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "wishlist_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_wishlist_deleted_at" ON "wishlist" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "wishlist" cascade;`);
    }
}
exports.Migration20250424110903 = Migration20250424110903;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA0MjQxMTA5MDMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy93aXNobGlzdC9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwNDI0MTEwOTAzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRTNDLEtBQUssQ0FBQyxFQUFFO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQywyU0FBMlMsQ0FBQyxDQUFDO1FBQ3pULElBQUksQ0FBQyxNQUFNLENBQUMsMkdBQTJHLENBQUMsQ0FBQztJQUMzSCxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FFRjtBQVhELDBEQVdDIn0=