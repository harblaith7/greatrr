import React, { Component } from 'react';
import "./HabitStats.scss"
import ModalNav from "../ModalNav/ModalNav"
import WeekBox from "../WeekBox/WeekBox"
import LinearProgressBar from "../ProgressBar/ProgressBar"
import CircularProgessBar from "../CircularProgressBar/CircularProgressBar"
import {connect} from "react-redux"
import {updateUserHabits} from "../../actions"
import trophy from "../../assets/svg/award.svg"
import notes from "../../assets/svg/notepad.svg"
import HabitAccomplisments from "../HabitAccomplishments/HabitAccomplisments"
import HabitNotes from "../HabitNotes/HabitNotes"
import { AnimatePresence } from 'framer-motion';

class HabitStats extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedHabit : {},
            weekBoxInfo : [
                {
                    weekAbbreviation : "1",
                    weekId: 0
                },
                {
                    weekAbbreviation : "2",
                    weekId: 1
                },
                {
                    weekAbbreviation : "3",
                    weekId: 2
                },
                {
                    weekAbbreviation : "4",
                    weekId: 3
                },
                {
                    weekAbbreviation : "5",
                    weekId: 4
                },
                {
                    weekAbbreviation : "6",
                    weekId: 5
                },
                {
                    weekAbbreviation : "7",
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
            },
            saveAnimation: false,
            isAccomplishmentsToggled: false,
            isNotesToggled: false,
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
        setTimeout(() => {
            this.setState({
                selectedHabit : this.props.userHabits[0]
            })
        }, 1)
        
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
        this.setState({
            saveAnimation: true
        })
        setTimeout(() => {
            this.setState({
                saveAnimation: false
            })
        }, 4000)
    }

    toggleAccomplishments = () => {
        this.setState({
            isAccomplishmentsToggled : !this.state.isAccomplishmentsToggled,
            isNotesToggled: false
        })
    }

    toggleNotes = () => {
        this.setState({
            isNotesToggled : !this.state.isNotesToggled,
            isAccomplishmentsToggled: false
        })
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
            }, () => {
                this.props.updateUserHabits(this.props.auth._id, this.state.selectedHabit._id, this.state.selectedHabit)
            })
            
        }
        // LET CURRENT SCORE TO ZERO 
        // SET WEEKSTATUS TO ALL FALSE
        // SAVE THE DATA 
    }

    changeHabitAccomplishments = (updatedHabitList) => {

        

        const updatedHabit = {
            ...this.state.selectedHabit,
            habitAccomplishments : updatedHabitList
        }

        this.setState({
            selectedHabit : updatedHabit
        }, () => {
            this.props.updateUserHabits(this.props.auth._id, this.state.selectedHabit._id, this.state.selectedHabit)
        })

    }

    changeHabitEntries = (updatedHabitEntries) => {

        const updatedHabit = {
            ...this.state.selectedHabit,
            habitJournalEntries : updatedHabitEntries
        }

        this.setState({
            selectedHabit : updatedHabit
        }, () => {
            this.props.updateUserHabits(this.props.auth._id, this.state.selectedHabit._id, this.state.selectedHabit)
        })

    }


    
  

    render() {
        const {
            dailyHabit, 
            level, 
            habitName, 
            currentScore, 
            totalHours, 
            habitDuration, 
            totalPoints,
            habitAccomplishments,
            habitJournalEntries
        } = this.state.selectedHabit

        
        return (
            <div className="HabitStats">
                <ModalNav/>
                <div className="HabitStats__container">
                    <AnimatePresence>
                        {this.state.isAccomplishmentsToggled && (
                            <HabitAccomplisments
                                habitAccomplishments={habitAccomplishments}
                                changeHabitAccomplishments={this.changeHabitAccomplishments}
                            />
                            )
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        {this.state.isNotesToggled && (
                            <HabitNotes
                                habitJournalEntries={habitJournalEntries}
                                changeHabitEntries = {this.changeHabitEntries}
                            />
                            )
                        }
                    </AnimatePresence>
                    
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
                            Performed: <span data-testid="current-score">{currentScore}</span>  <br/> 
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
                </div>
                <div className="HabitStats__btn-container">
                    <button 
                        className="HabitStats__save-btn"  
                        onClick={this.saveChanges}
                    >
                        {this.state.saveAnimation ? (
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                        ) : "Save Changes"}
                    </button>
                    {
                        currentScore >= habitDuration ? (
                            <button 
                                 className="HabitStats__save-btn HabitStats__proceed-btn--proceed"  
                                 onClick={this.saveChanges}
                                 onClick={this.nextLevel}
                            >
                                Proceed to Next Level
                            </button>
                        ) : (
                            <button 
                                 className="HabitStats__proceed-btn "  
                                 onClick={this.nextLevel}
                            >
                                Reset Level
                            </button>
                        )
                    }
                </div>
                <div className="HabitStats__small-btns-container">
                    <div className="HabitStats__small-btn-container" onClick={this.toggleNotes}>
                        <img src={notes} alt="" className="HabitStats__small-icon"/>
                    </div>
                    <div className="HabitStats__small-btn-container" onClick={this.toggleAccomplishments}>
                        <img src={trophy} alt="" className="HabitStats__small-icon HabitStats__small-icon--larger"/>
                    </div>
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


