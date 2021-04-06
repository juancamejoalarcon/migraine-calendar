import { Migraine } from './migraine'
import { Calendar } from './calendar'

const migraine1 = new Migraine('Leve')
const migraine2 = new Migraine('Moderado')

const calendar = new Calendar([migraine1, migraine2])

console.log(calendar.migraines)