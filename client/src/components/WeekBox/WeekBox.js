import React, { Component } from 'react';
import "./WeekBox.scss"



class WeekBox extends Component {

    handleClick = () => {

        // SENDING UPDATED WEEK STATUS TO HABITSTATS COMPONENT //
        const { id, weekStatus} = this.props
        let newWeekStatus = weekStatus
        newWeekStatus[id] = !newWeekStatus[id]
        this.props.updateWeekStatus(newWeekStatus, newWeekStatus[id])

        //
    }

    render() {
        const {weekAbbreviation, id, weekStatus, testId} = this.props
        return (
            <>
                {weekStatus && (
                    <div 
                        className={`WeekBox ${weekStatus[id] ? "WeekBox--active" : ""}`}
                        onClick={this.handleClick}
                        data-testid={testId}
                    >
                        {weekAbbreviation}
                    </div>
                )}
            </>
        );
    }
}

export default WeekBox;