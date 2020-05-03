import React, { Component } from 'react';
import "./SchedulePage.scss"
import SideNav from "../../components/SideNav/SideNav"
import TimeCard from "../../components/TimeCard/TimeCard"


class SchedulePage extends Component {
    
    render() {
        
        return (
            <div className="SchedulePage">
                {this.props.auth && <SideNav authInfo = {this.props.auth}/>}
                <div className="SchedulePage__content">
                    <TimeCard
                        habits={this.props.habits}
                    />
                </div>
            </div>
        );
    }
}


export default SchedulePage;