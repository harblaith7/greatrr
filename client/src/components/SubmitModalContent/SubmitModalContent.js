import React, { Component } from 'react';
import {connect} from "react-redux"
import {addUserHabit} from "../../actions"
import {Link} from "react-router-dom"


class SubmitModalContent extends Component {

    constructor(props){
        super(props)
        this.state = {
            habits : []
        }
    }

    handleClick = async (e) => {
        
        // ADDS ONE HABIT TO DATABASE AND REFRESHES PAGE 
        if(e.target.id === "saveAndContinue"){
            window.location.reload(); 
            await this.props.addUserHabit(this.props.auth._id, this.props.formInput);
        }
        // CLOSES FORM, RESETS INPUTS AND TRANSFERS DATA TO SUBMITMODAL 
        else if(e.target.id === "saveAndAdd"){
           
                this.props.closeModal()
                this.props.resetForm()
                this.props.toggleForm()
                this.props.transferHabit(this.props.formInput)
        }
    }

    render() {
        console.log(this.props.auth._id)
        const {longTermGoal, threeMonthGoal, dailyHabit, habitName, habitDuration, habitPriority} = this.props.formInput
        return (
            <div className="SubmitModal">
                <div className="SubmitModal__container">
                    <div className="SubmitModal__text-container">
                        <h4 className="SubmitModal__heading" >
                            Long-term Goal
                        </h4>
                        <p className="SubmitModal__user-input" data-testid="long-term-goal">
                            {longTermGoal}
                        </p>
                        <h4 className="SubmitModal__heading">
                            Three-month Goal
                        </h4>
                        <p className="SubmitModal__user-input" data-testid="three-month-goal">
                            {threeMonthGoal}
                        </p>
                        <h4 className="SubmitModal__heading">
                            Daily Habit
                        </h4>
                        <p className="SubmitModal__user-input" data-testid="daily-habit">
                            {dailyHabit}
                        </p>
                        <h4 className="SubmitModal__heading">
                            Habit Name
                        </h4>
                        <p className="SubmitModal__user-input" data-testid="habit-name">
                            {habitName}
                        </p>
                        <div className="SubmitModal__number-inputs-container">
                            <div className="SubmitModal__number-input-container">
                                <h4 className="SubmitModal__heading">
                                    Priority: 
                                </h4>
                                <p className="SubmitModal__user-input SubmitModal__user-input--number" data-testid="habit-priority">
                                    {habitPriority}
                                </p>
                            </div>
                            <div className="SubmitModal__number-input-container">
                                <h4 className="SubmitModal__heading">
                                    Duration: 
                                </h4>
                                <p className="SubmitModal__user-input SubmitModal__user-input--number" data-testid="habit-duration">
                                    {habitDuration}
                                </p>
                            </div>
                        </div>
                        <div className="SubmitModal__btn-container">
                            <button 
                                className="SubmitModal__btn" 
                                id="saveAndAdd"
                                data-testid="add-habit-btn"
                                onClick={this.handleClick}
                            >
                                <span>
                                    Save & Add Another Habit
                                </span>
                                
                            </button>
                            <button
                                className="SubmitModal__btn" 
                                id="saveAndContinue"
                                data-testid="add-habit-continue-btn"
                                onClick={this.handleClick}
                            >
                                Save & Continue
                            </button>
                        </div>
                    </div>
                </div>
          </div>
        );
    }
}

function mapStateToProps({auth}){
    return {
        auth
    }
}

export default connect(mapStateToProps, {addUserHabit})(SubmitModalContent);