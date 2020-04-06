import React, { Component } from 'react';
import "./CreateHabitsForm.scss"
import {motion, AnimatePresence} from "framer-motion"

class CreateHabitsForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            isToggled : true,
            formInfo : [
                {
                   title : "Where do you want to be?" ,
                   description: "The first step is knowing what you want and where you eventually want to be. Name one long term goal that you want to ultimately achieve 5 to 10 years down the line.",
                   example: "I want to have the physique of Jason Momoa",
                   inputContent: "Long-term goal"
                },
                {
                    title : "Let's break it down." ,
                    description: "Now lets break down the goal into something you can accomplish in the next three months. Find a place that you want to be in after three months that will get you closer to your ultimate goal.",
                    example: "I will shead 10lbs of body fat",
                    inputContent: "Three-month goal"
                 },
                 {
                    title : "Break it down some more!" ,
                    description: "The only way to achieve your goal is to work towards it consistently. Thats where daily habits come into play! Break down your three-month goal into tiny a goal you can accomplish everyday. ",
                    example: "I will intermittent fast and go to the gym in the morning",
                    inputContent: "Daily Habit"
                 }
            ]
        }
    }

    // RENDERS THE WHOLE FORM PAGE //
    displayFormPage = () => {
        return (
            <motion.div 
                className="CreateHabitsForm__form-page-containter"
                initial={{y: "-100%"}}
                animate={{y:0}}
                exit={{y: "-100%"}}
                transition = {{damping: 500}}
            >
                <form action="" className="CreateHabitsForm__form">
                    {this.displayFormTitleAndInput()}

                    <button 
                        type="submit" 
                        className="CreateHabitsForm__continue-btn"
                        onClick={this.toggleForm}
                    >
                        Continue
                    </button>
                </form>
                
            </motion.div>
        )
    }

    // RENDERS THE INDIVIDUAL INPUT FIELDS // 
    displayFormTitleAndInput = () => {
        return this.state.formInfo.map(info => {
            return (
                <div className="CreateHabitsForm__title-input-container">
                    <h4 className="CreateHabitsForm__form-heading">
                        {info.title}
                    </h4>
                    <p className="CreateHabitsForm__form-description">
                        {info.description} 
                        <br/>
                        <span>
                            {info.example}
                        </span>
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
                                {info.inputContent}
                            </span>
                        </label>
                    </div>
                </div>
            )
        })
    }

    toggleForm = () => {
        this.setState({
            isToggled : !this.state.isToggled
        })
    }

    render() {
        return (
            <div className="CreateHabitsForm">
                <div className="CreateHabitsForm__container">

                    {/* TEXT CONTAINER TO THE LEFT */}
                    <div className="CreateHabitsForm__greeting-container">
                        <div className="CreateHabitsForm__text-container">
                            <h2 className="CreateHabitsForm__heading">
                                Hello, {this.props.userName}!
                            </h2>
                            <p className="CreateHabitsForm__description">
                                It looks like you haven't created or broken down your goals yet. Lets do that now!
                                Fill out the form to the right and start working towards your <span>dream life.</span>
                            </p>
                        </div>
                    </div>

                    {/* FORM CONTAINER TO THE RIGHT */}

                    <div className="CreateHabitsForm__form-container">
                       <AnimatePresence>
                            {this.state.isToggled && this.displayFormPage()}
                        </AnimatePresence>
                        <button type="button" onClick={this.toggleForm}>Toggle</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateHabitsForm;