import React, { Component } from 'react';
import deleteBtn from "../../assets/svg/delete.svg"

class HabitItem extends Component {

    handleClick = () => {
        console.log("running")
        this.props.deleteHabit(this.props.habitName)
    }

    render() {
        return (
            <div className="ListModal__item-container">
                <div className="ListModal__text-container">
                    <h4 className="ListModal__habit-title">
                        {this.props.habitName}
                    </h4>
                    <p className="ListModal__habit-description">
                        {this.props.dailyHabit}
                    </p>
                </div>
                <img 
                    src={deleteBtn} 
                    alt="" 
                    className="ListModal__delete-btn"
                    onClick={this.handleClick}
                />
            </div>
        );
    }
}

export default HabitItem;