import React, { Component } from 'react';
import "./SchedulePage.scss"
import SideNav from "../../components/SideNav/SideNav"
import TimeCard from "../../components/TimeCard/TimeCard"
import WeekGoals from "../../components/WeekGoals/WeekGoals"
import {connect} from "react-redux"

class SchedulePage extends Component {
    render() {
        console.log(this.props.userHabits)
        return (
            <div className="SchedulePage">
                {this.props.auth && <SideNav authInfo = {this.props.auth}/>}
                <div className="SchedulePage__content">
                    {this.props.auth && <TimeCard habits = {this.props.auth}/>}
                    <WeekGoals/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({auth, userHabits}) => ({
    auth,
    userHabits
})

export default connect(mapStateToProps)(SchedulePage);