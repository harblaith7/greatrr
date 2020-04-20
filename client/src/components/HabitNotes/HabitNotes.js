import React, { Component } from 'react';
import {motion} from "framer-motion"
import "./HabitNotes.scss"

class HabitNotes extends Component {
    render() {
        return (
            <motion.div 
                className="HabitNotes"
                initial={{x : "100%", opacity: 0}}
                animate={{x : 0, opacity: 1}}
                transition={{
                    damping: 500
                }}
                exit={{x : "100%", opacity: 0.75, transition : {duration: 0.5}}}
            >
                <h2 className="HabitNotes__heading">
                    Habit Journal and Reminders
                </h2>
                <p className="HabitNotes__description">
                    Journal about your progression and remind yourself the reason why you are performing this habit.
                    Invision the end goal and set daily affrimations. 
                </p>
            </motion.div>
        );
    }
}

export default HabitNotes;

        