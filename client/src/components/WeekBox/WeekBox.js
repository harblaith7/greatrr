import React, { Component } from 'react';
import "./WeekBox.scss"

class WeekBox extends Component {
    render() {
        return (
            <div className="WeekBox">
                {this.props.weekAbbreviation}
            </div>
        );
    }
}

export default WeekBox;