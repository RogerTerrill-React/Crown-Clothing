import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';

function Hats() {
  return (
    <div>
      HATS
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
