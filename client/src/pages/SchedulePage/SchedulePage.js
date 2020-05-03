import React, { Component } from 'react';
import "./SchedulePage.scss"
import SideNav from "../../components/SideNav/SideNav"
import TimeCard from "../../components/TimeCard/TimeCard"
import {connect} from "react-redux"

class SchedulePage extends Component {
    render() {
        return (
            <div className="SchedulePage">
                {this.props.auth && <SideNav authInfo = {this.props.auth}/>}
                <div className="SchedulePage__content">
                    <TimeCard/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => ({
    auth
})

export default connect(mapStateToProps)(SchedulePage);