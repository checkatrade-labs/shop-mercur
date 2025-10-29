"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20241206125415 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20241206125415 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "seller" ("id" text not null, "name" text not null, "handle" text not null, "description" text null, "photo" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "seller_pkey" primary key ("id"));');
        this.addSql('CREATE UNIQUE INDEX IF NOT EXISTS "IDX_seller_handle_unique" ON "seller" (handle) WHERE deleted_at IS NULL;');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_seller_deleted_at" ON "seller" (deleted_at) WHERE deleted_at IS NULL;');
        this.addSql('create table if not exists "member_invite" ("id" text not null, "email" text not null, "role" text check ("role" in (\'owner\', \'admin\', \'member\')) not null default \'owner\', "seller_id" text not null, "token" text not null, "expires_at" timestamptz not null, "accepted" boolean not null default false, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "member_invite_pkey" primary key ("id"));');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_member_invite_seller_id" ON "member_invite" (seller_id) WHERE deleted_at IS NULL;');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_member_invite_deleted_at" ON "member_invite" (deleted_at) WHERE deleted_at IS NULL;');
        this.addSql('create table if not exists "member" ("id" text not null, "role" text check ("role" in (\'owner\', \'admin\', \'member\')) not null default \'owner\', "name" text not null, "bio" text null, "phone" text null, "photo" text null, "seller_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "member_pkey" primary key ("id"));');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_member_seller_id" ON "member" (seller_id) WHERE deleted_at IS NULL;');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_member_deleted_at" ON "member" (deleted_at) WHERE deleted_at IS NULL;');
        this.addSql('alter table if exists "member_invite" add constraint "member_invite_seller_id_foreign" foreign key ("seller_id") references "seller" ("id") on update cascade on delete cascade;');
        this.addSql('alter table if exists "member" add constraint "member_seller_id_foreign" foreign key ("seller_id") references "seller" ("id") on update cascade on delete cascade;');
    }
    async down() {
        this.addSql('alter table if exists "member_invite" drop constraint if exists "member_invite_seller_id_foreign";');
        this.addSql('alter table if exists "member" drop constraint if exists "member_seller_id_foreign";');
        this.addSql('drop table if exists "seller" cascade;');
        this.addSql('drop table if exists "member_invite" cascade;');
        this.addSql('drop table if exists "member" cascade;');
    }
}
exports.Migration20241206125415 = Migration20241206125415;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNDEyMDYxMjU0MTUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zZWxsZXIvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI0MTIwNjEyNTQxNS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUVwRCxLQUFLLENBQUMsRUFBRTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsbVVBQW1VLENBQUMsQ0FBQztRQUNqVixJQUFJLENBQUMsTUFBTSxDQUFDLDZHQUE2RyxDQUFDLENBQUM7UUFDM0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1R0FBdUcsQ0FBQyxDQUFDO1FBRXJILElBQUksQ0FBQyxNQUFNLENBQUMsMmVBQTJlLENBQUMsQ0FBQztRQUN6ZixJQUFJLENBQUMsTUFBTSxDQUFDLG1IQUFtSCxDQUFDLENBQUM7UUFDakksSUFBSSxDQUFDLE1BQU0sQ0FBQyxxSEFBcUgsQ0FBQyxDQUFDO1FBRW5JLElBQUksQ0FBQyxNQUFNLENBQUMsOGFBQThhLENBQUMsQ0FBQztRQUM1YixJQUFJLENBQUMsTUFBTSxDQUFDLHFHQUFxRyxDQUFDLENBQUM7UUFDbkgsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1R0FBdUcsQ0FBQyxDQUFDO1FBRXJILElBQUksQ0FBQyxNQUFNLENBQUMsa0xBQWtMLENBQUMsQ0FBQztRQUVoTSxJQUFJLENBQUMsTUFBTSxDQUFDLG9LQUFvSyxDQUFDLENBQUM7SUFDcEwsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvR0FBb0csQ0FBQyxDQUFDO1FBRWxILElBQUksQ0FBQyxNQUFNLENBQUMsc0ZBQXNGLENBQUMsQ0FBQztRQUVwRyxJQUFJLENBQUMsTUFBTSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxNQUFNLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBRUY7QUFoQ0QsMERBZ0NDIn0=