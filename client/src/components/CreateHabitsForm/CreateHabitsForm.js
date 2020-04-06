import React, { Component } from 'react';
import "./CreateHabitsForm.scss"

class CreateHabitsForm extends Component {
    render() {
        return (
            <div className="CreateHabitsForm">
                <div className="CreateHabitsForm__container">
                    <div className="CreateHabitsForm__greeting-container">
                        <div className="CreateHabitsForm__text-container">
                            <h2 className="CreateHabitsForm__heading">
                                Hello, {this.props.userName}!
                            </h2>
                            <p className="CreateHabitsForm__description">
                                It looks like you haven't created or broken down your goals yet. 
                                Fill out the form to the right and start working towards your <span>dream life.</span>
                            </p>
                        </div>
                    </div>
                    <div className="CreateHabitsForm__form-container">
                        <form action="" className="CreateHabitsForm__form">

                            <div className="CreateHabitsForm__title-input-container">
                                <h4 className="CreateHabitsForm__form-heading">
                                    Where do you want to be?
                                </h4>
                                <p className="CreateHabitsForm__form-description">
                                    The first step is knowing what you want and where you eventually want to be. Name one long term goal that you want to 
                                    ultimately achieve 5 to 10 years down the line. <br/>
                                    <span>I want to have the physique of Jason Momoa</span>
                                </p>
                                <div className="CreateHabitsForm__input-container">
                                    <input 
                                        type="text"
                                        autoComplete="off"
                                        name="long-term-goal"
                                        required
                                        className="CreateHabitsForm__input"
                                    />
                                    <label htmlFor="long-term-goal" className="CreateHabitsForm__label">
                                        <span className="CreateHabitsForm__label-name">
                                            Long-term goal
                                        </span>
                                    </label>
                                </div>
                            </div>
                            
                            <div className="CreateHabitsForm__title-input-container">
                                <h4 className="CreateHabitsForm__form-heading">
                                    Let's break it down.
                                </h4>
                                <p className="CreateHabitsForm__form-description">
                                    Now lets break down the goal into something you can accomplish in the next three months. 
                                    Find a place that you want to be in after three months that will get you closer to your 
                                    ultimate goal. <br/> 
                                    <span>I will shead 10lbs of body fat.</span>
                                </p>
                                <div className="CreateHabitsForm__input-container">
                                    <input 
                                        type="text"
                                        autoComplete="off"
                                        name="long-term-goal"
                                        required
                                        className="CreateHabitsForm__input"
                                    />
                                    <label htmlFor="long-term-goal" className="CreateHabitsForm__label">
                                        <span className="CreateHabitsForm__label-name">
                                            Three-month goal
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="CreateHabitsForm__title-input-container">
                                <h4 className="CreateHabitsForm__form-heading">
                                    Break it down some more!
                                </h4>
                                <p className="CreateHabitsForm__form-description">
                                    The only way to achieve your goal is to work towards it consistently. Thats where daily habits come into play!
                                    Break down your three-month goal into tiny a goal you can accomplish everyday.  <br/>
                                    <span>I will intermittent fast and go to the gym in the morning</span>
                                </p>
                                <div className="CreateHabitsForm__input-container">
                                    <input 
                                        type="text"
                                        autoComplete="off"
                                        name="long-term-goal"
                                        required
                                        className="CreateHabitsForm__input"
                                    />
                                    <label htmlFor="long-term-goal" className="CreateHabitsForm__label">
                                        <span className="CreateHabitsForm__label-name">
                                            Daily Habit
                                        </span>
                                    </label>
                                </div>
                            </div>

                            
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateHabitsForm;