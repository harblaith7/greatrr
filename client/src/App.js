import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <LandingPage/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;