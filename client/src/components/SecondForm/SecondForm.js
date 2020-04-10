import React, { Component } from 'react';

class SecondForm extends Component {
    render() {
        return (
            <form action="" className="CreateHabitsForm__form">

                <div className="CreateHabitsForm__short-inputs-container">
                    <div className="CreateHabitsForm__title-input-container CreateHabitsForm__title-input-container--short">
                        <h4 className="CreateHabitsForm__form-heading">
                            Give it a name
                        </h4>
                        <p className="CreateHabitsForm__form-description">
                            Give your habit a concise name that represents it. The name should be 5-15 character long.
                            <br/>
                            <span>
                                Fasting
                            </span>
                        </p>
                        <div className="CreateHabitsForm__input-container">
                            <input 
                                type="text"
                                autoComplete="off"
                                name="long-term-goal"
                                required
                                className="CreateHabitsForm__input"
                                name="habitName"
                                onChange={this.props.handleChange}
                                value={this.props.formInput.habitName}
                            />
                            <label htmlFor="long-term-goal" className="CreateHabitsForm__label">
                                <span className="CreateHabitsForm__label-name">
                                    Habit name
                                </span>
                            </label>
                            
                        </div>
                    </div>

                    <div className="CreateHabitsForm__title-input-container CreateHabitsForm__title-input-container--short">
                        <h4 className="CreateHabitsForm__form-heading">
                            Give it an image
                        </h4>
                        <p className="CreateHabitsForm__form-description">
                            Give your habit an image that represents it. Paste an image URL onto the input field below.
                            <br/>
                            <span>
                            https://img.example.com.jpg
                            </span>
                        </p>
                        <div className="CreateHabitsForm__input-container">
                            <input 
                                type="text"
                                autoComplete="off"
                                name="long-term-goal"
                                required
                                className="CreateHabitsForm__input"
                                name="habitImage"
                                onChange={this.props.handleChange}
                                value={this.props.formInput.habitImage}
                            />
                            <label htmlFor="long-term-goal" className="CreateHabitsForm__label">
                                <span className="CreateHabitsForm__label-name">
                                    Image URL
                                </span>
                            </label>
                            
                        </div>
                    </div>
                </div>
                

                

                <div className="CreateHabitsForm__title-input-container">
                    <h4 className="CreateHabitsForm__form-heading">
                        Priority
                    </h4>
                    <p className="CreateHabitsForm__form-description">
                        How important is achieving this long-term goal to you? Is it something that would be just nice to have (1) or is it something that 
                        is extremely desirable and thus its achievement would give you great satisfaction, fulfillment, and joy (5).
                        <br/>
                        <span>
                            5 priority points
                        </span>
                    </p>
                    <div className="CreateHabitsForm__input-container">
                        <input 
                            type="range"
                            autoComplete="off"
                            name="long-term-goal"
                            required
                            min="1"
                            max="5"
                            step="1"
                            className="CreateHabitsForm__range-input"
                            value={this.props.formInput.habitPriority}
                            name="habitPriority"
                            onChange={this.props.handleChange}
                        />
                        
                    </div>
                </div>

                <div className="CreateHabitsForm__title-input-container">
                    <h4 className="CreateHabitsForm__form-heading">
                        Duration
                    </h4>
                    <p className="CreateHabitsForm__form-description">
                        How often in a given week do you want to perform this habit? This should relate back to the priority value you assigned.
                        If the goal has a great priority, then the habit should be perform more consistently throughout the week (6/7). If 
                        however, the goal does not have a great priority, then the habit can be peformed less consistently (4/7).
                        <br/>
                        <span>
                            6 times per week
                        </span>
                    </p>
                    <div className="CreateHabitsForm__input-container">
                        <input 
                            type="range"
                            autoComplete="off"
                            name="long-term-goal"
                            required
                            min="1"
                            max="7"
                            step="1"
                            className="CreateHabitsForm__range-input"
                            value={this.props.formInput.habitDuration}
                            name="habitDuration"
                            onChange={this.props.handleChange}
                        />
                        
                    </div>
                </div>
            </form>
        );
    }
}

export default SecondForm;