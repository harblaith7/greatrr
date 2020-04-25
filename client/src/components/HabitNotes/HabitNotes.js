import React, { Component } from 'react';
import {motion} from "framer-motion"
import "./HabitNotes.scss"
import deleteIcon from "../../assets/svg/delete.svg"
import editIcon from "../../assets/svg/edit.svg"

class HabitNotes extends Component {

    constructor(props){
        super(props)
        this.state = {
            journalInput : ""
        }
    }

    // ADDING ENTRIES //

    addEntry = () => {

        const updatedHabitList = [
            ...this.props.habitJournalEntries,
            this.state.journalInput 
        ]


        if(this.state.journalInput){
            this.props.changeHabitEntries(updatedHabitList )
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

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
                <textarea 
                    name="journalInput" 
                    className="HabitNotes__textarea"
                    onChange={this.handleChange}
                    value={this.state.journalInput}
                ></textarea>
                <button className="HabitNotes__button" onClick={this.addEntry}>
                    Add Entry
                </button>
                <div className="HabitNotes__notes-container">
                    <div className="HabitNotes__note-container">
                        <p className="HabitNotes__note">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, error aut! Molestiae aliquam neque repellendus, accusamus reprehenderit facilis dicta quasi laudantium possimus asperiores iste vitae cum omnis. Dicta labore laboriosam veniam voluptate voluptates voluptatibus placeat.
                        </p>
                        <div className="HabitNotes__icon-container">
                            <img src={deleteIcon} alt="" className="HabitNotes__img"/>
                            <img src={editIcon} alt="" className="HabitNotes__img"/>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
}

export default HabitNotes;

        