import React, { Component } from 'react';
import "./HabitStats.scss"
import ModalNav from "../ModalNav/ModalNav"
import WeekBox from "../WeekBox/WeekBox"
import LinearProgressBar from "../ProgressBar/ProgressBar"

class HabitStats extends Component {
    render() {
        return (
            <div className="HabitStats">
                <ModalNav/>
                <div className="HabitStats__container">
                    <div className="HabitStats__first-container">
                        <h2 className="HabitStats__heading">
                            Basketball Training
                        </h2>
                        <p className="HabitStats__habit-description">
                            <span>Week 4</span> - hard training for 3 hours
                        </p>
                        <div className="HabitStats__week-container">
                            <WeekBox weekDev = "M" />
                            <WeekBox weekDev = "T" />
                            <WeekBox weekDev = "W" />
                            <WeekBox weekDev = "Th" />
                            <WeekBox weekDev = "F" />
                            <WeekBox weekDev = "S" />
                            <WeekBox weekDev = "S" />
                        </div>
                        <p className="HabitStats__sub-title">
                            You have perform this habit 4 times this week
                        </p>
                        <div className="HabitStats__progress-bar-container">
                            <div className="HabitStats__habit-count">
                                4/53
                            </div>
                            <LinearProgressBar/>
                            <div className="HabitStats__minus-plus-container">
                                <button class="HabitStats__btn">-</button>
                                <input type="text" value="1" className="HabitStats__input"/>
                                <button class="HabitStats__btn">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="HabitStats__second-container">
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default HabitStats;