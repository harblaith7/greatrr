import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import {connect} from 'react-redux'
import * as actions from "./actions"

class App extends Component {

  componentDidMount(){
    this.props.fetchUser()
  }

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

export default connect(null, actions)(App);