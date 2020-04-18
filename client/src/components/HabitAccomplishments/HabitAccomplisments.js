import React, { Component } from 'react';
import "./HabitAccomplishments.scss"
import {motion} from "framer-motion"

class HabitAccomplisments extends Component {
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
                <form action="" className="HabitAccomplishments__form">
                    <input type="text" className="HabitAccomplishments__input"/>
                    <button className="HabitAccomplishments__button">Add</button>
                </form>
                <div className="HabitAccomplishments__items-container">
                    <div className="HabitAccomplishments__item-container">
                        Spent 402 hours to practicing
                        <div className="HabitAccomplishments__icon-container">
                            hi
                        </div>
                    </div>
                    <div className="HabitAccomplishments__item-container">
                        Hello
                    </div>
                    <div className="HabitAccomplishments__item-container">
                        Hello
                    </div>
                    <div className="HabitAccomplishments__item-container">
                        Hello
                    </div>
                    <div className="HabitAccomplishments__item-container">
                        Hello
                    </div>
                    <div className="HabitAccomplishments__item-container">
                        Hello
                    </div>
                    <div className="HabitAccomplishments__item-container">
                        Hello
                    </div>
                    <div className="HabitAccomplishments__item-container">
                        Hello
                    </div>
                </div>
            </motion.div>
        );
    }
}

export default HabitAccomplisments;