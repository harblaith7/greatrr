import React, { Component } from 'react';
import "./TimeCard.scss"
import arrow from "../../assets/svg/right-arrow.svg"



class TimeCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            times : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            wantedTimeRange : [],
            timeAndHabit : [],
            to: "1",
            from: "1",
            habit: this.props.habits.habits[0].habitName,
            usedUpTime : {}
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
            return <option value={time} id={`from-${time}`}>{time}:00</option>
        })
    }

    displayToTimeOptions = () => {
        return this.state.times.map(time => {
            return <option value={time} id={`to-${time}`}>{time}:00</option>
        })
    }

    displayHabitsOptions = () => {
        return this.props.habits.habits.map(habit => {
            return <option value={habit.habitName} id={habit.habitName}>{habit.habitName}</option>
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = async () => {
        const {from, to, habit , usedUpTime} = this.state

        // CHECK IF VALID INPUT //
        if(parseInt(from) > parseInt(to)){
            alert("Unfortunately, you can't go back in time")
            return
        } else if (parseInt(from) === parseInt(to)) {
            alert("You did nothing in no time")
            return
        }

        let range = []

        for(let i = parseInt(from); i < parseInt(to); i++){
            if(i in usedUpTime){
                alert("You already used up this time")
                range = [];
                return;
            } else {
                range.push(i)
                await this.setState({
                    usedUpTime : {
                        ...this.state.usedUpTime,
                        [i] : {
                            color: "blue",
                            habit
                        }
                    }
                })
            }
        }


        this.setState({
            timeAndHabit : [
                ...this.state.timeAndHabit,
                {
                    range: range,
                    habit: habit
                }
            ]
        })
    }

    render() {
        
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
                            
                        </div>
                    </div>
                    <div className="TimeCard__stamps-container">
                        {this.displayTimeStamps()}
                    </div>
                    <div className="TimeCard__time-input-container">
                        <p className="TimeCard__time-input-text">
                            From:
                        </p>
                        <label for="favcity">
                            <select name="from" className="TimeCard__time-select" onChange={this.handleChange} value={this.state.from}>
                                {this.displayFromTimeOptions()}
                            </select>
                        </label>
                        <p className="TimeCard__time-input-text">
                            to:
                        </p>
                        <label for="favcity">
                            <select name="to" id="" className="TimeCard__time-select" onChange={this.handleChange}>
                                {this.displayToTimeOptions()}
                            </select>
                        </label>
                        <p className="TimeCard__time-input-text">
                            I did:
                        </p>
                        <label for="favcity" className="TimeCard__label TimeCard__label--larger" id="larger">
                            <select 
                                name="habit" 
                                id="" 
                                className="TimeCard__time-select TimeCard__time-select--larger"
                                onChange={this.handleChange}
                            >
                                {this.displayHabitsOptions()}
                            </select>
                        </label>
                        <button className="TimeCard__add-btn" onClick={this.handleClick}>
                            Add 
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}



export default TimeCard;