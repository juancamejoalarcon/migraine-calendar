"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
class Calendar {
    constructor(migraines = []) {
        this._migraines = migraines;
    }
    get migraines() {
        return this._migraines;
    }
    addMigraine(migraine) {
        this.migraines.push(migraine);
    }
}
exports.Calendar = Calendar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxRQUFRO0lBUW5CLFlBQVksWUFBd0IsRUFBRTtRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtJQUM3QixDQUFDO0lBTkQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQ3hCLENBQUM7SUFNRCxXQUFXLENBQUMsUUFBa0I7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDL0IsQ0FBQztDQUVGO0FBaEJELDRCQWdCQyJ9