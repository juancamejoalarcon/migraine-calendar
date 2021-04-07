import { Migraine } from './migraine'

export class Calendar {

  private _migraines: Migraine[]

  get migraines(): Migraine[] {
    return this._migraines
  }

  constructor(migraines: Migraine[] = []) {
    this._migraines = migraines
  }

  addMigraine(migraine: Migraine): void {
    this.migraines.push(migraine)
  }

}