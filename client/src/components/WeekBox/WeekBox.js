import React, { Component } from 'react';
import "./WeekBox.scss"



class WeekBox extends Component {

    handleClick = () => {
        const {weekAbbreviation, id, weekStatus} = this.props
        let newWeekStatus = weekStatus
        newWeekStatus[id] = !newWeekStatus[id]
        this.props.updateWeekStatus(newWeekStatus)
    }

    render() {
        const {weekAbbreviation, id, weekStatus} = this.props
        return (
            <>
                {weekStatus && (
                    <div 
                        className={`WeekBox ${weekStatus[id] && "WeekBox--active"}`}
                        onClick={this.handleClick}
                    >
                        {weekAbbreviation}
                    </div>
                )}
            </>
        );
    }
}

export default WeekBox;