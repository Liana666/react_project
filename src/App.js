import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Covid from './Covid';
import Input from './Input';
import Movie from './Movie';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/covid" component={Covid}></Route>
            <Route path="/input" component={Input}></Route>
            <Route path="/movie" component={Movie}></Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
