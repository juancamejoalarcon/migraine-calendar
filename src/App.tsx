import React from 'react';
import './App.css';
import { Migraine } from './lib/migraine'
import { Calendar } from './lib/calendar'

const migraine1 = new Migraine(new Date(), 'Leve', '40 minutos', '', '')
const migraine2 = new Migraine(new Date(), 'Leve', '40 minutos', '', '')

const calendar = new Calendar([migraine1, migraine2])

function App(): JSX.Element {
  return (
    <div className="App">
          <ul>
      {calendar.migraines.map((migraine: Migraine) => {
        return <li>{migraine.intensity}</li>
      })}
    </ul>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
