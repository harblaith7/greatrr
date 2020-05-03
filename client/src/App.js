import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import UserPage from "./pages/UserPage/UserPage"
import SchedulePage from "./pages/SchedulePage/SchedulePage"
import {connect} from 'react-redux'
import * as actions from "./actions";


class App extends Component {

  componentDidMount(){
    this.props.fetchUser()
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>

            <Route strict exact path="/">
              <LandingPage/>
            </Route>

            <Route path="/logged">
              <UserPage/>
            </Route>

            <Route path="/schedule">
              <SchedulePage/>
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => ({
  auth
})

export default connect(mapStateToProps, actions)(App);