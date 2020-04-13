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

    componentDidUpdate(prevProps, prevState){
        if(prevProps.selectedHabit !== this.props.selectedHabit){
            this.setState({
                selectedHabit : this.props.selectedHabit
            })
        }

        if(prevState.selectedHabit.currentScore !== this.state.selectedHabit.currentScore){
            const {currentScore, habitDuration} = this.state.selectedHabit
            if(currentScore === habitDuration){
                this.setState({
                    selectedHabit : {
                        ...this.state.selectedHabit,
                        totalPoints: this.state.selectedHabit.totalPoints + 5
                    }
                })
            }
        }
        
    }

    componentDidMount(){
        this.setState({
            selectedHabit : this.props.userHabits[0]
        })
    }

    displayWeekBox = () => {
        return this.state.weekBoxInfo.map(week => {
            return (
                <WeekBox 
                    key = {week.weekId}
                    id = {week.weekId}
                    weekAbbreviation = {week.weekAbbreviation}
                    weekStatus = {this.state.selectedHabit.weekStatus}
                    updateWeekStatus={this.updateWeekStatus}
                />
            )
        })
    }

    updateWeekStatus = async (newWeekStatus, isOn) => {
        let counter = 0;
        let changeBy;
        isOn ? changeBy = 1 : changeBy = -1
        newWeekStatus.map(status => {
            if(status){
                counter ++
            }
        })
        console.log(isOn)
        await this.setState({
            selectedHabit : {
                ...this.state.selectedHabit, 
                weekStatus : newWeekStatus,
                currentScore : counter,
                totalHours: this.state.selectedHabit.totalHours + changeBy
            }
        })  
    }

    render() {
        const {dailyHabit, level, habitName, currentScore, totalHours, habitDuration, totalPoints} = this.state.selectedHabit
        return (
            <div className="HabitStats">
                <ModalNav/>
                <div className="HabitStats__container">
                    <div className="HabitStats__first-container">
                        <h2 className="HabitStats__heading">
                            {habitName}
                        </h2>
                        <p className="HabitStats__habit-description">
                            <span>Level {level}</span> - {dailyHabit}
                        </p>
                        <div className="HabitStats__week-container">
                            {this.state.selectedHabit && this.displayWeekBox()}
                        </div>
                        <p className="HabitStats__sub-title">
                            Habit performed: {currentScore} <br/> 
                            Target: {habitDuration} 
                            
                        </p>
                        <div className="HabitStats__progress-bar-container">
                            <div className="HabitStats__habit-count">
                                {totalHours}/{habitDuration * 12}
                            </div>
                            <LinearProgressBar
                                currentScore={totalHours}
                                habitDuration={habitDuration * 12}
                            />

                        </div>
                    </div>
                    <div className="HabitStats__second-container">
                        <div className="HabitStats__circular-container">
                            <CircularProgessBar
                                totalPoints = {totalPoints}
                            />
                            <div className="HabitStats__circle-stats">
                                {totalPoints}/400
                            </div>
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

const mapStateToProps = ({selectedHabit, userHabits}) => ({
    selectedHabit,
    userHabits
})

export default connect(mapStateToProps)(HabitStats);


