import React, { Component } from 'react';
import './MigraineCreator.scss';
import IMigraine from '../Migraine.interface'
import formSchema from './MigraineCreatorFormSchema'

type MigraineCreatorProps = {
  mode: string,
  addMigraine(e: React.MouseEvent<HTMLButtonElement>): void,
  migraine?: IMigraine
}
type MigraineState =  {
  name: string;
  currentFormStep: keyof typeof formSchema;
  allStepsKeys: Array<keyof typeof formSchema>;
  migraine: IMigraine;
}

export default class MigraineCreator extends Component<MigraineCreatorProps, MigraineState> {
  
  constructor(props: MigraineCreatorProps) {
    super(props);
    this.state = {
      name: 'EDITOR',
      currentFormStep: 'intensity',
      allStepsKeys: Object.keys(formSchema) as Array<keyof typeof formSchema>,
      migraine: {
        intensity: 'leve',
        additionalSymptoms: 'Ninguno en especial',
        date: new Date,
        duration: 'Entre 30 min y 3 horas',
        drugs: '',
        triggers: '',
        
      }
    };
  }

  InputRadio = (): JSX.Element => {
    const { currentFormStep, migraine } = this.state
    const formStep = formSchema[currentFormStep]
    const onSelectedRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
      migraine[currentFormStep] = e.target.value
      this.setState({ migraine })
    }
    return (
      <div className="migraine-creator__form__inputRadio">
        <h1>{formStep.title}</h1>
        {formStep.options.map((value: string, index: number) =>
          <label key={index}>
            <input 
              type="radio" 
              name={this.state.currentFormStep} 
              value={value} 
              onChange={onSelectedRadio}
            />
            {value}
          </label>
        )}
      </div>
    )
  }

  InputCheckboxes = (): JSX.Element => {
    const formStep = formSchema[this.state.currentFormStep]
    return (
      <div className="migraine-creator__form__inputCheckboxes">
        <h1>{formStep.title}</h1>
        {formStep.options.map((value: string, index: number) =>
          <label key={index}>
            <input type="checkbox" name={this.state.currentFormStep} value={value} />
            {value}
          </label>
        )}
      </div>
    )
  }

  InputArea = (): JSX.Element => {
    const formStep = formSchema[this.state.currentFormStep]
    return (
      <div className="migraine-creator__form__inputTextarea">
        <h1>{formStep.title}</h1>
        <textarea></textarea>
      </div>
    )
  }

  CurrentInput = (): JSX.Element => {
    const formStep = formSchema[this.state.currentFormStep]
    if (formStep.type === 'inputRadio') return (<this.InputRadio />)
    if (formStep.type === 'inputCheckboxes') return (<this.InputCheckboxes />)
    if (formStep.type === 'inputTextarea') return (<this.InputArea />)
    return (<div>Elemento no encontrado</div>)
  }

  NavigationButton = (): JSX.Element => {
    const { allStepsKeys, currentFormStep } = this.state
    const currentIndex = allStepsKeys.indexOf(currentFormStep)
    const toggleStep = (add: boolean) => {
      const newCurrentFormStep = allStepsKeys[currentIndex + (add ? (1) : (-1))]
      this.setState({ currentFormStep: newCurrentFormStep })
    }

    return (
      <div className="migraine-creator__form__navigation">
        <button 
          type="button" 
          onClick={() => toggleStep(false)}
          disabled={currentIndex === 0}
          >
          &#5130;
        </button>
        <button 
          type="button"
          onClick={() => toggleStep(true)}
          disabled={currentIndex === allStepsKeys.length - 1}
          >
          &#5125;
        </button>
      </div>
    )
  }



  render(): JSX.Element {
    return (
      <div className="migraine-creator">
        <div className="migraine-creator__container">
          <div className="migraine-creator__form">
            <div className="migraine-creator__form__container">
              <this.CurrentInput/>
              <this.NavigationButton />
            </div>
          </div>
          <button type="button" onClick={this.props.addMigraine}>Add migraine Editor</button>
        </div>
      </div>
    );
  }
}