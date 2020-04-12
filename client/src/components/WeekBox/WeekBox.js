import React, { Component } from 'react';
import "./WeekBox.scss"

class WeekBox extends Component {
    render() {
        return (
            <div className="WeekBox">
                {this.props.weekDev}
            </div>
        );
    }
}

export default WeekBox;