export class Migraine {

  intensity: string
  date: Date
  duration: string
  drugs: string
  triggers: string
  constructor(
    date: Date,
    intensity: string,
    duration: string,
    drugs: string,
    triggers: string
    ) {
    this.date = date
    this.intensity = intensity
    this.duration = duration
    this.drugs = drugs
    this.triggers = triggers
  }
}