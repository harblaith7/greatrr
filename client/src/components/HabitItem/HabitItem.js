import React, { Component } from 'react';
import deleteBtn from "../../assets/svg/delete.svg"
import {motion, AnimatePresence} from "framer-motion"


class HabitItem extends Component {

    handleClick = () => {
        this.props.deleteHabit(this.props.habitName)
    }

    render() {
        return (
            <AnimatePresence>
                <motion.div 
                    className="ListModal__item-container"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <div className="ListModal__text-container">
                        <h4 className="ListModal__habit-title">
                            {this.props.habitName}
                        </h4>
                        <p className="ListModal__habit-description">
                            {this.props.dailyHabit}
                        </p>
                    </div>
                    <img 
                        src={deleteBtn} 
                        alt="" 
                        className="ListModal__delete-btn"
                        onClick={this.handleClick}
                    />
                </motion.div>
            </AnimatePresence>
        );
    }
}

export default HabitItem;