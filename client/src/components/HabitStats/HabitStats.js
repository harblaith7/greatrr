import React, { Component } from 'react';
import "./HabitStats.scss"
import ModalNav from "../ModalNav/ModalNav"
import WeekBox from "../WeekBox/WeekBox"
import LinearProgressBar from "../ProgressBar/ProgressBar"
import CircularProgessBar from "../CircularProgressBar/CircularProgressBar"
import {connect} from "react-redux"

class HabitStats extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedHabit : {},
            weekBoxInfo : [
                {
                    weekAbbreviation : "M",
                    weekId: 0
                },
                {
                    weekAbbreviation : "T",
                    weekId: 1
                },
                {
                    weekAbbreviation : "W",
                    weekId: 2
                },
                {
                    weekAbbreviation : "Th",
                    weekId: 3
                },
                {
                    weekAbbreviation : "F",
                    weekId: 4
                },
                {
                    weekAbbreviation : "S",
                    weekId: 5
                },
                {
                    weekAbbreviation : "S",
                    weekId: 6
                },
            ]
        }
    }

    componentDidUpdate(prevProps){
        console.log(prevProps.selectedHabit)
        if(prevProps.selectedHabit !== this.props.selectedHabit){
            this.setState({
                selectedHabit : this.props.selectedHabit
            })
        }
    }

    displayWeekBox = () => {
        return this.state.weekBoxInfo.map(week => {
            return (
                <WeekBox 
                    key = {week.weekId}
                    id = {week.weekId}
                    weekAbbreviation = {week.weekAbbreviation}
                    weekStatus = {this.state.selectedHabit.weekStatus}
                />
            )
        })
    }

    render() {
        return (
            <div className="HabitStats">
                <ModalNav/>
                <div className="HabitStats__container">
                    <div className="HabitStats__first-container">
                        <h2 className="HabitStats__heading">
                            {this.state.selectedHabit.habitName}
                        </h2>
                        <p className="HabitStats__habit-description">
                            <span>Level {this.state.selectedHabit.level}</span> - {this.state.selectedHabit.dailyHabit}
                        </p>
                        <div className="HabitStats__week-container">
                            {this.displayWeekBox()}
                        </div>
                        <p className="HabitStats__sub-title">
                            You have perform this habit {this.state.selectedHabit.currentScore} times this week
                        </p>
                        <div className="HabitStats__progress-bar-container">
                            <div className="HabitStats__habit-count">
                                {this.state.selectedHabit.totalHours}/{this.state.selectedHabit.habitDuration * 12}
                            </div>
                            <LinearProgressBar
                                currentScore={this.state.selectedHabit.totalHours}
                                habitDuration={this.state.selectedHabit.habitDuration * 12}
                            />
                            <div className="HabitStats__minus-plus-container">
                                <button class="HabitStats__btn">-</button>
                                <input type="text" value="1" className="HabitStats__input"/>
                                <button class="HabitStats__btn">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="HabitStats__second-container">
                        <div className="HabitStats__circular-container">
                            <CircularProgessBar
                                totalPoints = {this.state.selectedHabit.totalPoints}
                            />
                            <div className="HabitStats__circle-stats">
                                {this.state.selectedHabit.totalPoints}/400
                            </div>
                        </div>
                        <div className="HabitStats__minus-plus-container">
                            <button class="HabitStats__btn">-</button>
                            <input type="text" value="1" className="HabitStats__input"/>
                            <button class="HabitStats__btn">+</button>
                        </div>
                    </div>
                    <button className="HabitStats__save-btn">
                        Save Changes
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({selectedHabit}) => ({
    selectedHabit
})

export default connect(mapStateToProps)(HabitStats);


