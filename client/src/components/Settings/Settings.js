import React, { Component } from 'react';
import "./Settings.scss"
import {connect} from "react-redux"

class Settings extends Component {



    render() {
        console.log(this.props.userHabits)
        return (
            <div className="Settings">
                <div className="Settings__container">
                    <div className="Settings__habit-container">
                        <h3 className="Settings__habit-container">
                            Piano Practice
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({userHabits}) => ({
    userHabits
})

export default connect(mapStateToProps)(Settings);