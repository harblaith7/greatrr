import React, { Component } from 'react';
import "./HabitAccomplishments.scss"
import {motion} from "framer-motion";
import deleteIcon from "../../assets/svg/delete.svg"
import editIcon from "../../assets/svg/edit.svg"
import uuid from "uuid/v4"

class HabitAccomplisments extends Component {

    constructor(props){
        super(props)
        this.state = {
            accomplishmentInput : ""
        }
    }

    displayItems = () => {
        console.log(this.props.habitAccomplishments.length)
        if(this.props.habitAccomplishments.length){
            return this.props.habitAccomplishments.map(accomplishment => {
                return (
                    <div className="HabitAccomplishments__item-container" id={uuid()} key={uuid()}>
                        {accomplishment}
                        <div className="HabitAccomplishments__icon-container">
                            <img src={editIcon} alt="" className="HabitAccomplishments__icon"/>
                            <img src={deleteIcon} alt="" className="HabitAccomplishments__icon"/>
                        </div>
                    </div>
                )
            })
        } else {
            return ""
        }  
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(this.state.accomplishmentInput){
            this.props.addHabitAccomplishments(this.state.accomplishmentInput)
        } 
    }

    render() {
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
                    <button className="HabitAccomplishments__button">Add</button>
                </form>
                <div className="HabitAccomplishments__items-container">
                    {this.displayItems()}
                </div>
            </motion.div>
        );
    }
}

export default HabitAccomplisments;