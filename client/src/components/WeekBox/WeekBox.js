import React, { Component } from 'react';
import "./WeekBox.scss"



class WeekBox extends Component {
    render() {
        const {weekAbbreviation, id, weekStatus} = this.props
        return (
            <>
                {weekStatus && (
                    <div className={`WeekBox ${weekStatus[id] && "WeekBox--active"}`}>
                        {weekAbbreviation}
                    </div>
                )}
            </>
        );
    }
}

export default WeekBox;