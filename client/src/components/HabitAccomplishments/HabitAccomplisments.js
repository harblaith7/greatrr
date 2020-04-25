import React, { Component } from 'react';
import "./HabitAccomplishments.scss"
import {motion} from "framer-motion";
import deleteIcon from "../../assets/svg/delete.svg"
import editIcon from "../../assets/svg/edit.svg"
import uuid from "uuid/v4";
import AccomplishmentItem from "../AccomplishmentItem/AccomplishmentItem"

class HabitAccomplisments extends Component {

    constructor(props){
        super(props)
        this.state = {
            accomplishmentInput : "",
            toggleUpdate: false,
            previousAccomplishment: ""
        }
        this.accomplishmentRef = React.createRef()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // READING ACCOMPLISHMENTS //

    displayItems = () => {
        if(this.props.habitAccomplishments.length){
            return this.props.habitAccomplishments.map(accomplishment => {
                return (
                    <AccomplishmentItem 
                        accomplishment = {accomplishment}
                        transferId = {this.updateAccomplishment}
                        deleteAccomplishment = {this.deleteAccomplishment}
                    />
                )
            })
        } else {
            return ""
        }  
    }

    // UPDATING ACCOMPLISHMENT //

    updateAccomplishment = (textContent) => {
        this.setState({
            accomplishmentInput: textContent,
            toggleUpdate : true,
            previousAccomplishment : textContent
        }) 
    }

    saveAccomplishment = () => {
        const index = this.props.habitAccomplishments.findIndex(accomplishment => {
            return accomplishment === this.state.previousAccomplishment
        })

        const updatedAccomplishmentArray = this.props.habitAccomplishments
        updatedAccomplishmentArray[index] = this.state.accomplishmentInput

        this.props.changeHabitAccomplishments(updatedAccomplishmentArray)

        this.setState({
            accomplishmentInput: "",
            toggleUpdate : false,
            previousAccomplishment : ""
        }) 
    }

    // ADDING ACCOMPLISHMENT // 

    handleSubmit = (e) => {
        e.preventDefault()

        const updatedHabitList = [
            ...this.props.habitAccomplishments,
            this.state.accomplishmentInput
        ]

        if(this.state.accomplishmentInput){
            this.props.changeHabitAccomplishments(updatedHabitList)

            this.setState({
                accomplishmentInput: ""
            })
        } 
    }

    // DELETING ACCOMPLISHMENTS //

    deleteAccomplishment = (textContent) => {
        const index = this.props.habitAccomplishments.findIndex(accomplishment => {
            return accomplishment === textContent
        })

        const updatedAccomplishmentArray = this.props.habitAccomplishments
        updatedAccomplishmentArray.splice(index, 1)

        this.props.changeHabitAccomplishments(updatedAccomplishmentArray)
    }

    render() {
        const {toggleUpdate} = this.state
        return (
            <motion.div 
                className="HabitAccomplishments"
                initial={{x : "100%", opacity: 0}}
                animate={{x : 0, opacity: 1}}
                transition={{
                    damping: 500
                }}
                exit={{x : "100%", opacity: 0.75, transition : {duration: 0.5}}}
            >
                <h3 className="HabitAccomplishments__heading">
                    Habit Accomplishments & Records
                </h3>
                <p className="HabitAccomplishments__description">
                    Note down any notable accomplishments and records you've achieved regarding this habit.
                </p>
                <form action="" className="HabitAccomplishments__form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        className="HabitAccomplishments__input"
                        onChange={this.handleChange}
                        name="accomplishmentInput"
                        value={this.state.accomplishmentInput}
                    />
                    {toggleUpdate ? (
                        <button 
                            className="HabitAccomplishments__button HabitAccomplishments__button--yellow"
                            onClick = {this.saveAccomplishment}
                            >
                                Update
                            </button>
                    ) : (
                        <button className="HabitAccomplishments__button">Add</button>
                    )}
                </form>
                <div className="HabitAccomplishments__items-container">
                    {this.displayItems()}
                </div>
            </motion.div>
        );
    }
}

export default HabitAccomplisments;