import React, { Component } from 'react';

class SubmitModalContent extends Component {

    handleClick = () => {
        console.log("ran")
    }

    render() {
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

export default SubmitModalContent;