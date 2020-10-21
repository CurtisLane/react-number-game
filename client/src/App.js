import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import GameContext from './utils/GameContext';
import useGameModel from './utils/useGameModel';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <GameContext.Provider value={useGameModel()}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </GameContext.Provider>
  );
}

export default App;
