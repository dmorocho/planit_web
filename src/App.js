import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Counter } from './features/counter/Counter';
import './App.css';
//components
import HomePage from './app/screens/homescreen'
import Header from './features/Header/index.js'
import ErrorPage from './app/screens/ErrorPage'
import SearchPage from './app/screens/SearchScreen'
// import DatePicker from './features/datepicker' 
// import Autocomplete from './features/Header/autoplaces.js'
import Footer from './features/Footer';

function App() {
  return (
    //BEM
    <div className="app">
    <Router>
      <Header/>

        <Switch>
          <Route exact path={'/'}>
            <HomePage/>
          </Route>
          <Route path={'/search'}>
            <SearchPage/>
          </Route>
          <ErrorPage/>
        </Switch>

      
      
      <Footer/>

    </Router>
    </div>
  );
}

export default App;
