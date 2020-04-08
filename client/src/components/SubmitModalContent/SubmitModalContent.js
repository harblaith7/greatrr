import React, { Component } from 'react';

class SubmitModalContent extends Component {
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
                    </div>
                </div>
          </div>
        );
    }
}

export default SubmitModalContent;