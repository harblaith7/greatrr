import React, { Component } from 'react';
import "./WeekGoals.scss"
import IndividualGoal from "../IndividualGoal/IndividualGoal"
import {motion, AnimatePresence} from "framer-motion"
import uuid from "uuid/v4"

class WeekGoals extends Component {

    constructor(props){
        super(props)
        this.state = {
            goal: "",
            timePeriod : "week",
            weekGoals : [],
            dayGoals : []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            
        })
    }

    handleSubmit = (e) => {
        const {timePeriod, goal} = this.state
        e.preventDefault()

        if(!this.state.goal){
            return 
        }

        if(timePeriod === "week"){
            this.setState({
                weekGoals : [
                    ...this.state.weekGoals,
                    {
                        id: uuid(),
                        status: "Not Complete",
                        goal: goal,
                        timePeriod : "weekGoals"
                    }
                ],
                goal: ""
            })
        } else {
            this.setState({
                dayGoals : [
                    ...this.state.dayGoals,
                    {
                        id: uuid(),
                        status: "Not Complete",
                        goal: goal,
                        timePeriod: "dayGoals"
                    }
                ],
                goal: ""
            })
        }
    }

    changeStatus = (id, newStatus, period) => {
        console.log(this.state[period])
        const index = this.state[period].findIndex(goal => {
            return goal.id === id
        })

        const updatedState = this.state[period]

        updatedState[index] = {
            ...updatedState[index],
            status: newStatus
        }

        this.setState({
            [period] : updatedState
        })
    }

    displayWeekGoals = () => {
        return this.state.weekGoals.map(goal => {
            return <IndividualGoal goal={goal} updateStatus = {this.changeStatus} removeGoal={this.removeGoal}/>
        })
    }

    displayDayGoals = () => {
        return this.state.dayGoals.map(goal => {
            return <IndividualGoal goal={goal} updateStatus = {this.changeStatus} removeGoal={this.removeGoal}/>
        })
    }

    removeGoal = (id, period) => {
        console.log(period)
        console.log(this.state[period])
        const updatedState = this.state[period].filter(goal => {
            return goal.id !== id
        })

        this.setState({
            [period] : updatedState
        })
    }

    render() {
        return (
            <div className="WeekGoals">
                <div className="WeekGoals__container">
                    <h3 className="WeekGoals__heading">
                        Week & Daily Goals
                    </h3>
                    <form action="" className="WeekGoals__form" onSubmit = {this.handleSubmit}>
                        <input 
                            type="text" 
                            className="WeekGoals__text-input"
                            placeholder="Add a new goal"
                            onChange={this.handleChange}
                            name="goal"
                            value={this.state.goal}
                        />
                        <select 
                            id="" 
                            className="WeekGoals__select" 
                            name="timePeriod" 
                            value={this.state.timePeriod}
                            onChange = {this.handleChange}
                        >
                            <option value="week" className="WeekGoals__option">
                                week
                            </option>
                            <option value="day" className="WeekGoals__option">
                                day
                            </option>
                            
                        </select>
                        <button className="WeekGoals__submit-btn">
                            Add Goal
                        </button>
                    </form>
                    <div className="WeekGoals__goals-container">
                        <div className="WeekGoals__goal-container">
                            <h4 className="WeekGoals__heading">
                                Week
                            </h4>

                                <div className="WeekGoals__card" >
                                   {this.displayWeekGoals()}
                                </div>

                        </div>
                        <div className="WeekGoals__goal-container">
                            <h4 className="WeekGoals__heading">
                                Day
                            </h4>  
                            <div className="WeekGoals__card">
                                 {this.displayDayGoals()}
                            </div> 
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default WeekGoals;