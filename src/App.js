import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Pokemon from './components/pokemon/Pokemon';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path='/' component= {Dashboard}/>
          <Route exact path='/pokemon/:pokemonIndex' component= {Pokemon}/>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
