import React from 'react';

// import { Counter } from './features/counter/Counter';
import './App.css';
import HomePage from './app/screens/homescreen'
import Header from './features/header/'

function App() {
  return (
    //BEM
    <div className="app">
      <Header/>
      <HomePage/>
     
    </div>
  );
}

export default App;
