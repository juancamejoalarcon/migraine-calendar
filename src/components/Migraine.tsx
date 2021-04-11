import React, { Component } from 'react';
import IMigraine from './Migraine.interface'

type MigraineState =  {
  name: string;
}

export default class Migraine extends Component<IMigraine, MigraineState> {
  constructor(props: IMigraine) {
    super(props);
    this.state = {
      name: 'Migrain'
    };
  }

  render(): JSX.Element {
    return (
      <div>
        <p>
          {this.state.name}
        </p>
      </div>
    );
  }
}