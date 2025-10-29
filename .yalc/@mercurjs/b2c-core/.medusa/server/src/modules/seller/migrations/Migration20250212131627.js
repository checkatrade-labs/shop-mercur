"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Migration20250212131627", {
    enumerable: true,
    get: function() {
        return Migration20250212131627;
    }
});
const _migrations = require("@mikro-orm/migrations");
let Migration20250212131627 = class Migration20250212131627 extends _migrations.Migration {
    async up() {
        this.addSql('alter table if exists "member" add column if not exists "email" text null;');
    }
    async down() {
        this.addSql('alter table if exists "member" drop column if exists "email";');
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL3NlbGxlci9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwMjEyMTMxNjI3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1pZ3JhdGlvbiB9IGZyb20gJ0BtaWtyby1vcm0vbWlncmF0aW9ucydcblxuZXhwb3J0IGNsYXNzIE1pZ3JhdGlvbjIwMjUwMjEyMTMxNjI3IGV4dGVuZHMgTWlncmF0aW9uIHtcbiAgYXN5bmMgdXAoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICB0aGlzLmFkZFNxbChcbiAgICAgICdhbHRlciB0YWJsZSBpZiBleGlzdHMgXCJtZW1iZXJcIiBhZGQgY29sdW1uIGlmIG5vdCBleGlzdHMgXCJlbWFpbFwiIHRleHQgbnVsbDsnXG4gICAgKVxuICB9XG4gIFxuICBhc3luYyBkb3duKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIFxuICAgIHRoaXMuYWRkU3FsKCdhbHRlciB0YWJsZSBpZiBleGlzdHMgXCJtZW1iZXJcIiBkcm9wIGNvbHVtbiBpZiBleGlzdHMgXCJlbWFpbFwiOycpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNaWdyYXRpb24yMDI1MDIxMjEzMTYyNyIsIk1pZ3JhdGlvbiIsInVwIiwiYWRkU3FsIiwiZG93biJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiI7Ozs7K0JBRWFBOzs7ZUFBQUE7Ozs0QkFGYTtBQUVuQixJQUFBLEFBQU1BLDBCQUFOLE1BQU1BLGdDQUFnQ0MscUJBQVM7SUFDcEQsTUFBTUMsS0FBb0I7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLENBQ1Q7SUFFSjtJQUVBLE1BQU1DLE9BQXNCO1FBRTFCLElBQUksQ0FBQ0QsTUFBTSxDQUFDO0lBQ2Q7QUFDRiJ9