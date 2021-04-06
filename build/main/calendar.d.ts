import { Migraine } from './migraine';
export declare class Calendar {
    private _migraines;
    get migraines(): Migraine[];
    constructor(migraines?: Migraine[]);
    addMigraine(migraine: Migraine): void;
}
