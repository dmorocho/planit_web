import React from 'react';

// import { Counter } from './features/counter/Counter';
import './App.css';
//components
import HomePage from './app/screens/homescreen'
import Header from './features/header/'
import DatePicker from './features/datepicker'

function App() {
  return (
    //BEM
    <div className="app">
      <Header/>
      <HomePage/>
      {/* <DatePicker/> */}
     
    </div>
  );
}

export default App;
