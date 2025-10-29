"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250116135408 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250116135408 extends migrations_1.Migration {
    async up() {
        this.addSql('create table if not exists "tax_code" ("id" text not null, "name" text not null default \'\', "description" text not null default \'\', "code" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "tax_code_pkey" primary key ("id"));');
        this.addSql('CREATE UNIQUE INDEX IF NOT EXISTS "IDX_tax_code_code_unique" ON "tax_code" (code) WHERE deleted_at IS NULL;');
        this.addSql('CREATE INDEX IF NOT EXISTS "IDX_tax_code_deleted_at" ON "tax_code" (deleted_at) WHERE deleted_at IS NULL;');
    }
    async down() {
        this.addSql('drop table if exists "tax_code" cascade;');
    }
}
exports.Migration20250116135408 = Migration20250116135408;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAxMTYxMzU0MDguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy90YXhjb2RlL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTAxMTYxMzU0MDgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFcEQsS0FBSyxDQUFDLEVBQUU7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLGdWQUFnVixDQUFDLENBQUM7UUFDOVYsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2R0FBNkcsQ0FBQyxDQUFDO1FBQzNILElBQUksQ0FBQyxNQUFNLENBQUMsMkdBQTJHLENBQUMsQ0FBQztJQUMzSCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUVGO0FBWkQsMERBWUMifQ==