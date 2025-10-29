"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250324131111 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250324131111 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "configuration_rule" drop constraint if exists "configuration_rule_rule_type_check";`);
        this.addSql(`alter table if exists "configuration_rule" add constraint "configuration_rule_rule_type_check" check("rule_type" in ('global_product_catalog', 'require_product_approval', 'product_request_enabled', 'product_import_enabled'));`);
    }
    async down() {
        this.addSql(`alter table if exists "configuration_rule" drop constraint if exists "configuration_rule_rule_type_check";`);
        this.addSql(`alter table if exists "configuration_rule" add constraint "configuration_rule_rule_type_check" check("rule_type" in ('global_product_catalog', 'require_product_approval', 'product_request_enabled'));`);
    }
}
exports.Migration20250324131111 = Migration20250324131111;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTAzMjQxMzExMTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jb25maWd1cmF0aW9uL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTAzMjQxMzExMTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLDRHQUE0RyxDQUFDLENBQUM7UUFFMUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtT0FBbU8sQ0FBQyxDQUFDO0lBQ25QLENBQUM7SUFFUSxLQUFLLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLDRHQUE0RyxDQUFDLENBQUM7UUFFMUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5TUFBeU0sQ0FBQyxDQUFDO0lBQ3pOLENBQUM7Q0FFRjtBQWRELDBEQWNDIn0=