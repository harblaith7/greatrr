import React, { Component } from 'react';
import "./SchedulePage.scss"
import SideNav from "../../components/SideNav/SideNav"
import {connect} from "react-redux"

class SchedulePage extends Component {
    render() {
        return (
            <div className="">
                {
                    this.props.auth && <SideNav authInfo = {this.props.auth}/>
                }
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => ({
    auth
})

export default connect(mapStateToProps)(SchedulePage);