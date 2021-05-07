import React from 'react';
import logo from './logo.svg';
import './App.css';

import Message from './components/Message';

function App() {
  let firstValue: string = 'Andrew';
  // let arrayValue: number[] = [1, 3, 4];
  let arrayValue: Array<number> = [1, 3, 4, 5];
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Message message='simple message' />
        <ul>
          {arrayValue.map((index, value) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
