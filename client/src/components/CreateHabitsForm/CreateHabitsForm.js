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
                        hi
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateHabitsForm;