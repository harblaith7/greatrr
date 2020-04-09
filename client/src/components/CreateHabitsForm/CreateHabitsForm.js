import React, { Component } from 'react';
import "./CreateHabitsForm.scss"
import {motion, AnimatePresence} from "framer-motion";
import SecondForm from "../SecondForm/SecondForm";
import SubmitModal from "../SubmitModal/SubmitModal"
import Alert from "../Alert/Alert"

class CreateHabitsForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            isToggled : true,
            formInput : {
                longTermGoal : "",
                threeMonthGoal: "",
                dailyHabit: "",
                habitName : "",
                habitDuration : 1,
                habitPriority: 1
            },
            formInfo : [
                {
                   title : "Where do you want to be?" ,
                   description: "The first step is knowing what you want and where you eventually want to be. Name one long term goal that you want to ultimately achieve 5 to 10 years down the line.",
                   example: "I want to have the physique of Jason Momoa",
                   inputContent: "Long-term goal",
                   name: "longTermGoal"
                },
                {
                    title : "Let's break it down." ,
                    description: "Now lets break down the goal into something you can accomplish in the next three months. Find a place that you want to be in after three months that will get you closer to your ultimate goal.",
                    example: "I will shead 10lbs of body fat",
                    inputContent: "Three-month goal",
                    name: "threeMonthGoal"
                 },
                 {
                    title : "Break it down some more!" ,
                    description: "The only way to achieve your goal is to work towards it consistently. Thats where daily habits come into play! Break down your three-month goal into tiny a goal you can accomplish everyday. ",
                    example: "I will perform a 20 hour intermittent fast",
                    inputContent: "Daily Habit",
                    name: "dailyHabit"
                 }
            ],
            savedHabits : [

            ],
            toggleAlert: false
        }

    }

    // GET HABITS AND SAVES IT INTO STATE FROM MODAL //
    getAndSaveHabit = (habit) => {
        this.setState({
            savedHabits : [...this.state.savedHabits, habit]
        })
    }

    // RENDERS THE WHOLE FORM PAGE //
    displayFormPage = () => {
        return (
            <motion.div 
                className="CreateHabitsForm__form-page-containter"
                initial={{x: "-100%"}}
                animate={{x:0}}
                exit={{x: "-100%", transition: {delay: 0.2, damping: 1000}}}
                transition = {{damping: 1000, delay: 0.55, duration: 0.75}}
            >
                <form action="" className="CreateHabitsForm__form">
                    {this.displayFormTitleAndInput()}
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
                            name={info.name}
                            required
                            className="CreateHabitsForm__input"
                            onChange={this.handleChange}
                            value={this.state.formInput[info.name]}
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

    // TOGGLES THE TWO FORMS BACK AND FORTH //
    toggleForm = () => {
        this.setState({
            isToggled : !this.state.isToggled
        })
    }

    // CHANGES THE INPUT VALUES OF THE FORM //
    handleChange = (e) => {
        this.setState({
            formInput : {...this.state.formInput, [e.target.name] : e.target.value}
        })
    }

    // RESETS FORM STATE TO ORIGINAL VALUE 
    resetForm = () => {
        this.setState({
            formInput : {
                longTermGoal : "",
                threeMonthGoal: "",
                dailyHabit: "",
                habitName : "",
                habitDuration : 1,
                habitPriority: 1
            }
        })
    }

    // VALIDATES IF ALL INFORMATION IS INPUT //
    validateForm = () => {
        for(let inputField in this.state.formInput){
            
            if(!this.state.formInput[inputField]){
                return false
            }
        }

        return true
    }

    // TOGGLES THE ALERT // 

    toggleAlert = () => {
        this.setState({
          toggleAlert : true
        }, () => {
          setTimeout(() => {
            this.setState({
              toggleAlert: false
            })
          }, 2000)
        })
      }

    render() {
        return (
            <div className="CreateHabitsForm">
               
                <AnimatePresence>
                    {this.state.toggleAlert && (
                        <Alert/>
                    )}
                </AnimatePresence>
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

                       {/* FIRST FORM */}
                       <AnimatePresence>
                            {this.state.isToggled && this.displayFormPage()}
                        </AnimatePresence>

                        {/* SECOND FORM */}
                        <AnimatePresence>
                            {!this.state.isToggled && (
                                <motion.div 
                                className="CreateHabitsForm__second-form"
                                initial={{x : "-100%"}}
                                animate={{x: "0"}}
                                exit={{x: "-100%", transition: {
                                    delay: 0.1, damping: 400
                                }}}
                                transition={{damping: 1000, delay: 0.75, duration: 0.5}}
                            >
                                <SecondForm
                                    handleChange = {this.handleChange}
                                    formInput = {this.state.formInput}
                                />
                            </motion.div>
                            )}   
                        </AnimatePresence>

                        {/* BUTTONS */}
                        <motion.button 
                            type="button" 
                            className="CreateHabitsForm__continue-btn"
                            onClick={this.toggleForm}
                            initial={{x: "-150%"}}
                            animate={{x: 0}}
                            transition = {{damping: 1000, delay: 0.2, duration: 0.75}}
                        >
                            {this.state.isToggled ? "Continue" : "Go Back"}
                        </motion.button>

                        <AnimatePresence>
                            {
                                this.validateForm() && (
                                    <SubmitModal 
                                        formInput = {this.state.formInput}
                                        resetForm={this.resetForm}
                                        toggleForm={this.toggleForm}
                                        transferHabit={this.getAndSaveHabit}
                                        toggleAlert={this.toggleAlert}
                                    />
                                )
                            }
                        </AnimatePresence>
                        

                    </div>

                </div>
            </div>
        );
    }
}

export default CreateHabitsForm;


/*


<button 
                            type="submit" 
                            className="CreateHabitsForm__continue-btn"
                            onClick={this.toggleForm}
                        >
                            Continue
                        </button>


                        */