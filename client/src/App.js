import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import UserPage from "./pages/UserPage/UserPage"
import SchedulePage from "./pages/SchedulePage/SchedulePage"
import {connect} from 'react-redux'
import {fetchUserHabits} from "./actions/index";


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      userHabits : []
    }
  }

  componentDidMount(){
    
  }

  componentDidUpdate(prevProps){
    if(prevProps.auth !== this.props.auth){
      if(this.props.auth){
        console.log(this.props.auth)
        console.log(this.props.fetchUserHabits(this.props.auth.id))
      }
    }
  }

  updateUserHabit = (habits) => {
    this.setState({
      userHabits: habits
    })
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
              <UserPage
                transferHabits = {this.updateUserHabit}
              />
            </Route>

            <Route path="/schedule">
              <SchedulePage 
                habits={this.props.userHabits}
                auth={this.props.auth}
              />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = ({auth, userHabits}) => ({
  auth,
  userHabits
})

export default connect(mapStateToProps, {fetchUserHabits})(App);