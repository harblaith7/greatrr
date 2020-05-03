import React, { Component } from 'react';
import "./TimeCard.scss"
import arrow from "../../assets/svg/right-arrow.svg"
import {connect} from "react-redux"

class TimeCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            times : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            wantedTimeRange : []
        }
    }

    displayTimeStamps = () => {
        return this.state.times.map(time => {
            return (
                <div className="TimeCard__stamp">
                    <p className="TimeCard__time">
                        {time}:00
                    </p>
                </div>
            )
        })
    }

    displayFromTimeOptions = () => {
        return this.state.times.map(time => {
            return <option value={`from-${time}:00`} id={`from-${time}`}>{time}:00</option>
        })
    }

    displayToTimeOptions = () => {
        return this.state.times.map(time => {
            return <option value={`to-${time}:00`} id={`to-${time}`}>{time}:00</option>
        })
    }

    displayHabitsOptions = () => {
        return this.props.habits.map(habit => {
            return <option value={`${habit.habitName}`} id={`${habit.habitName}`}>{habit}</option>
        })
    }

    render() {
        console.log(this.props.auth)
        return (
            <div className="TimeCard">
                <div className="TimeCard__container">
                    <div className="TimeCard__text-container">
                        <button className="TimeCard__save-btn">
                            Save and Continue
                            <img src={arrow} className="TimeCard__arrow-icon" alt=""/>
                        </button>
                        <div className="TimeCard__efficiency-container">
                            <p className="TimeCard__efficient-time">
                                2h 45min
                            </p>
                            <p className="TimeCard__efficient-percentage">
                                83% 
                            </p>
                        </div>
                    </div>
                    <div className="TimeCard__stamps-container">
                        {this.displayTimeStamps()}
                    </div>
                    <div className="TimeCard__time-input-container">
                        <p className="TimeCard__time-input-text">
                            From
                        </p>
                        <select name="" id="" className="TimeCard__time-input-text">
                            {this.displayFromTimeOptions()}
                        </select>
                        <p className="TimeCard__time-input-text">
                            To
                        </p>
                        <select name="" id="" className="TimeCard__time-input-text">
                            {this.displayToTimeOptions()}
                        </select>
                        <p className="TimeCard__time-input-text">
                            I did
                        </p>
                        <select name="" id="" className="TimeCard__time-input-text">
                            {this.props.habits && this.displayHabitsOptions()}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => ({
    auth
})

export default connect(mapStateToProps)(TimeCard);