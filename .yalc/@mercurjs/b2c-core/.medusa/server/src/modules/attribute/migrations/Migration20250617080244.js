"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250617080244 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250617080244 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "attribute" drop constraint if exists "attribute_handle_unique";`);
        this.addSql(`create table if not exists "attribute" ("id" text not null, "name" text not null, "description" text null, "handle" text not null, "metadata" jsonb null, "ui_component" text check ("ui_component" in ('select', 'multivalue', 'unit', 'toggle', 'text_area', 'color_picker')) not null default 'select', "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "attribute_pkey" primary key ("id"));`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_attribute_handle_unique" ON "attribute" (handle) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_attribute_deleted_at" ON "attribute" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`create table if not exists "attribute_possible_value" ("id" text not null, "value" text not null, "rank" integer not null, "metadata" jsonb null, "attribute_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "attribute_possible_value_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_attribute_possible_value_attribute_id" ON "attribute_possible_value" (attribute_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_attribute_possible_value_deleted_at" ON "attribute_possible_value" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "UQ_attribute_id_value" ON "attribute_possible_value" (attribute_id, value) WHERE deleted_at IS NULL;`);
        this.addSql(`create table if not exists "attribute_value" ("id" text not null, "value" text not null, "rank" integer not null, "metadata" jsonb null, "attribute_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "attribute_value_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_attribute_value_attribute_id" ON "attribute_value" (attribute_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_attribute_value_deleted_at" ON "attribute_value" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`alter table if exists "attribute_possible_value" add constraint "attribute_possible_value_attribute_id_foreign" foreign key ("attribute_id") references "attribute" ("id") on update cascade on delete cascade;`);
        this.addSql(`alter table if exists "attribute_value" add constraint "attribute_value_attribute_id_foreign" foreign key ("attribute_id") references "attribute" ("id") on update cascade on delete cascade;`);
    }
    async down() {
        this.addSql(`alter table if exists "attribute_possible_value" drop constraint if exists "attribute_possible_value_attribute_id_foreign";`);
        this.addSql(`alter table if exists "attribute_value" drop constraint if exists "attribute_value_attribute_id_foreign";`);
        this.addSql(`drop table if exists "attribute" cascade;`);
        this.addSql(`drop table if exists "attribute_possible_value" cascade;`);
        this.addSql(`drop table if exists "attribute_value" cascade;`);
    }
}
exports.Migration20250617080244 = Migration20250617080244;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA2MTcwODAyNDQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hdHRyaWJ1dGUvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDYxNzA4MDI0NC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUUzQyxLQUFLLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsd0ZBQXdGLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsTUFBTSxDQUFDLDhkQUE4ZCxDQUFDLENBQUM7UUFDNWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtSEFBbUgsQ0FBQyxDQUFDO1FBQ2pJLElBQUksQ0FBQyxNQUFNLENBQUMsNkdBQTZHLENBQUMsQ0FBQztRQUUzSCxJQUFJLENBQUMsTUFBTSxDQUFDLGtYQUFrWCxDQUFDLENBQUM7UUFDaFksSUFBSSxDQUFDLE1BQU0sQ0FBQywrSUFBK0ksQ0FBQyxDQUFDO1FBQzdKLElBQUksQ0FBQyxNQUFNLENBQUMsMklBQTJJLENBQUMsQ0FBQztRQUN6SixJQUFJLENBQUMsTUFBTSxDQUFDLHlJQUF5SSxDQUFDLENBQUM7UUFFdkosSUFBSSxDQUFDLE1BQU0sQ0FBQyxnV0FBZ1csQ0FBQyxDQUFDO1FBQzlXLElBQUksQ0FBQyxNQUFNLENBQUMsNkhBQTZILENBQUMsQ0FBQztRQUMzSSxJQUFJLENBQUMsTUFBTSxDQUFDLHlIQUF5SCxDQUFDLENBQUM7UUFFdkksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpTkFBaU4sQ0FBQyxDQUFDO1FBRS9OLElBQUksQ0FBQyxNQUFNLENBQUMsK0xBQStMLENBQUMsQ0FBQztJQUMvTSxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2SEFBNkgsQ0FBQyxDQUFDO1FBRTNJLElBQUksQ0FBQyxNQUFNLENBQUMsMkdBQTJHLENBQUMsQ0FBQztRQUV6SCxJQUFJLENBQUMsTUFBTSxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLE1BQU0sQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBRXhFLElBQUksQ0FBQyxNQUFNLENBQUMsaURBQWlELENBQUMsQ0FBQztJQUNqRSxDQUFDO0NBRUY7QUFsQ0QsMERBa0NDIn0=