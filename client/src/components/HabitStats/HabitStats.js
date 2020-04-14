import React, { Component } from 'react';
import "./HabitStats.scss"
import ModalNav from "../ModalNav/ModalNav"
import WeekBox from "../WeekBox/WeekBox"
import LinearProgressBar from "../ProgressBar/ProgressBar"
import CircularProgessBar from "../CircularProgressBar/CircularProgressBar"
import {connect} from "react-redux"
import {updateUserHabits} from "../../actions"
import nextArrow from "../../assets/svg/arrow.svg"
import Alert from "../Alert/Alert"

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
            ],
            pointsPerLevel : {
                1 : 5,
                2: 10,
                3: 15,
                4: 20,
                5: 25, 
                6: 30,
                7: 35,
                8: 40,
                9: 45,
                10: 50,
                11: 55,
                12: 60
            }
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.selectedHabit !== this.props.selectedHabit){
            this.setState({
                selectedHabit : this.props.selectedHabit
            })
        }

        const {currentScore, habitDuration, pointsAssigned, level} = this.state.selectedHabit
        const points = this.state.pointsPerLevel[`${level}`]
        if(prevState.selectedHabit.currentScore !== currentScore){
            if(currentScore === habitDuration && !pointsAssigned){
                
                this.setState({
                    selectedHabit : {
                        ...this.state.selectedHabit,
                        totalPoints: this.state.selectedHabit.totalPoints + points,
                        pointsAssigned: true
                    }
                })
            } else if (prevState.selectedHabit.currentScore === habitDuration && currentScore < habitDuration && prevState.selectedHabit.level === level){
                this.setState({
                    selectedHabit : {
                        ...this.state.selectedHabit,
                        totalPoints: this.state.selectedHabit.totalPoints - points,
                        pointsAssigned: false
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

    saveChanges = () => {
        this.props.updateUserHabits(this.props.auth._id, this.state.selectedHabit._id, this.state.selectedHabit)
    }

    nextLevel = async () => {
        const {currentScore, habitDuration} = this.state.selectedHabit
        // CHECK IF WE INCREMENT LEVEL 
        if(currentScore >= habitDuration){
            await this.setState({
                selectedHabit : {
                    ...this.state.selectedHabit,
                    weekStatus: [false, false, false, false, false, false, false],
                    currentScore: 0,
                    level: this.state.selectedHabit.level + 1,
                    pointsAssigned : false
                }
            })
            this.props.updateUserHabits(this.props.auth._id, this.state.selectedHabit._id, this.state.selectedHabit)
        } else {
            await this.setState({
                selectedHabit : {
                    ...this.state.selectedHabit,
                    weekStatus: [false, false, false, false, false, false, false],
                    currentScore: 0,    
                    pointsAssigned : false
                }
            })
            this.props.updateUserHabits(this.props.auth._id, this.state.selectedHabit._id, this.state.selectedHabit)
        }
        // LET CURRENT SCORE TO ZERO 
        // SET WEEKSTATUS TO ALL FALSE
        // SAVE THE DATA 
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
                            <button 
                                className="HabitStats__next-week-btn"
                                onClick={this.nextLevel}
                            >
                                <img src={nextArrow} alt="" className="HabitStats__arrow-icon"/>
                            </button> 
                        </div>
                        <p className="HabitStats__sub-title">
                            Performed: {currentScore} <br/> 
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
                            <p>You have completed this habit a total of <span>{totalHours}</span>  times</p>
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
                    <button 
                        className="HabitStats__save-btn"  
                        onClick={this.saveChanges}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({selectedHabit, userHabits, auth}) => ({
    selectedHabit,
    userHabits,
    auth
})

export default connect(mapStateToProps, {updateUserHabits})(HabitStats);


