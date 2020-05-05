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
            currentHabit: this.props.habits.habits[0].habitName,
            usedUpTime : {}
        }
    }

    displayTimeStamps = () => {

        const {usedUpTime} = this.state

        return this.state.times.map(time => {
           if(time in usedUpTime){
               
                return (
                    <div className="TimeCard__stamp" style={{background: usedUpTime[time].color}}>
                        <p className="TimeCard__time">
                            {time}:00
                        </p>
                    </div>
                )
           } else {
                    return (
                        <div className="TimeCard__stamp">
                            <p className="TimeCard__time">
                                {time}:00
                            </p>
                        </div>
                    )
                
                
           }
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

    displayHabitDisplay = () => {
        return this.state.timeAndHabit.map(habit => {
            return (
                <div className="TimeCard__habit-display-container">
                    <div className="TimeCard__habit-color" style={{background: habit.color}}></div>
                    <h5 className="TimeCard__habit-name">{habit.currentHabit}</h5>
                </div>
            )
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    determineColor = (currentHabit) => {
        return this.props.habits.habits.find(habit => {
            return habit.habitName === currentHabit
        }).color
    }

    checkIfValidInput = (from, to) => {
        if(parseInt(from) > parseInt(to)){
            alert("Unfortunately, you can't go back in time")
            return
        } else if (parseInt(from) === parseInt(to)) {
            alert("You did nothing in no time")
            return
        }
    }

    handleClick = async () => {
        const {from, to, currentHabit, usedUpTime, timeAndHabit} = this.state

        const color = this.determineColor(currentHabit)

        // CHECK IF VALID INPUT //
        this.checkIfValidInput(from, to)

        // CHECKS IF VALID TIME RANGE AND UPDATES STATE //
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
                            color,
                            currentHabit
                        }
                    }
                })
            }
        }

        const habitExists = timeAndHabit.some(habit => {
            return habit.currentHabit === currentHabit
        })

        console.log(habitExists)

        if(habitExists){
            const updatedTimeAndHabit = timeAndHabit.map(habit => {
                if(habit.currentHabit === currentHabit){
                    return {
                        ...habit,
                        timeRange: [
                            ...habit.timeRange,
                            ...range
                        ]
                    }
                } else {
                    return habit
                }
            })

            await this.setState({
                timeAndHabit : updatedTimeAndHabit
            })
        } else {
            await this.setState({
                timeAndHabit : [
                    ...this.state.timeAndHabit,
                    {
                        timeRange: range,
                        currentHabit,
                        color
                    }
                ]
            })
        }

        // MORE STATE UPDATES //
    }

    displayTotalTime = () => {
        let total = 0

        for(let i in this.state.usedUpTime){
            total++
        }

        return `${total}h 00min`
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
                                {this.displayTotalTime()}
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
                                name="currentHabit" 
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

                    <div className="TimeCard__habits-display-container">
                       {this.displayHabitDisplay()} 
                    </div>

                </div>
            </div>
        );
    }
}



export default TimeCard;