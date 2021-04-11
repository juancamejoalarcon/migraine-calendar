export default {
  'intensity': {
    title: 'Intensidad del dolor',
    type: 'inputRadio',
    options: ['leve', 'moderado', 'severa', 'muy severa']
  },
  'additionalSymptoms': {
    title: 'Sítomas adicionales',
    type: 'inputCheckboxes',
    options: [
      'Espasmo facial',
      'Sensibilidad a ruidio / Luz / Olores',
      'Alternaciones visuales, del lenguaje o de la sensibilidad',
      'Náuseas y vómitos',
      'Ninguno en especial'
    ]
  },
  'duration': {
    title: 'Duración del dolor',
    type: 'inputRadio',
    options: [
      'Segundos o minutos',
      'Entre 30 min y 3 horas',
      'Entre 4 horas y 3 días',
      'Más de 3 días',
    ]
  },
  'drugs': {
    title: 'Fármacos utilizados',
    type: 'inputTextarea',
    options: []
  },
  'triggers': {
    title: 'Posibles factores desencadenantes',
    type: 'inputTextarea',
    options: []
  }
}