import React from 'react';

// import { Counter } from './features/counter/Counter';
import './App.css';
//components
import HomePage from './app/screens/homescreen'
import Header from './features/header/'
import DatePicker from './features/datepicker' 
import Autocomplete from './features/header/autoplaces.js'

function App() {
  return (
    //BEM
    <div className="app">
      <Header/>
      <HomePage/>
      {/* <Autocomplete/> */}
      {/* <DatePicker/> */}
     
    </div>
  );
}

export default App;
