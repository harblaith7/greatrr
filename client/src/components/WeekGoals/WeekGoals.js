import React, { Component } from 'react';
import "./WeekGoals.scss"
import IndividualGoal from "../IndividualGoal/IndividualGoal"
import {motion, AnimatePresence} from "framer-motion"

class WeekGoals extends Component {
    render() {
        return (
            <div className="WeekGoals">
                <div className="WeekGoals__container">
                    <h3 className="WeekGoals__heading">
                        Week & Daily Goals
                    </h3>
                    <form action="" className="WeekGoals__form">
                        <input 
                            type="text" 
                            className="WeekGoals__text-input"
                            placeholder="Add a new goal"
                        />
                        <select name="" id="" className="WeekGoals__select">
                            <option value="week" className="WeekGoals__option">
                                week
                            </option>
                            <option value="week" className="WeekGoals__option">
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
                                    <IndividualGoal/>
                                    <IndividualGoal/>
                                </div>

                        </div>
                        <div className="WeekGoals__goal-container">
                            <h4 className="WeekGoals__heading">
                                Day
                            </h4>  
                            <div className="WeekGoals__card">
                                
                            </div> 
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default WeekGoals;