import React, { Component } from 'react';

import IMigraine from './Migraine.interface'
import Migraine from './Migraine'
import MigraineCreator from './MigraineCreator/MigraineCreator'


type CalendarState =  {
  name: string;
  migraines: IMigraine[],
  isMigraineCreatorVisible: boolean
}

export default class Calendar extends Component<unknown, CalendarState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      name: 'Migrain',
      migraines: [],
      isMigraineCreatorVisible: false
    };
  }

  addMigraine = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    this.state.migraines.push({
      intensity: '',
      additionalSymptoms: '',
      date: new Date(),
      duration: '',
      drugs: '',
      triggers: ''
    })
    this.setState({
      name: 'cosa',
      migraines: this.state.migraines
    })
    this.toggleMigraineCreator(false)
  }

  toggleMigraineCreator = (toggle: boolean): void => {
    this.setState({ isMigraineCreatorVisible: toggle })
  }

  render(): JSX.Element {
    return (
      <div>
        {this.state.name}
        <button type="button" onClick={() => this.toggleMigraineCreator(true)}>Add migraine</button>
        <div>
          {this.state.migraines.map((migraine, index) => 
            <Migraine
              key={index}
              date={migraine.date}
              intensity={migraine.intensity}
              additionalSymptoms={migraine.additionalSymptoms}
              duration={migraine.duration}
              drugs={migraine.drugs}
              triggers={migraine.triggers}
            />
          )}
        </div>
        {this.state.isMigraineCreatorVisible && <MigraineCreator mode={'create'} addMigraine={this.addMigraine} />}
      </div>
    );
  }
}