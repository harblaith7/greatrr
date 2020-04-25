import React, { Component } from 'react';
import {motion} from "framer-motion"
import "./HabitNotes.scss"
import HabitNote from "../HabitNote/HabitNote"

class HabitNotes extends Component {

    constructor(props){
        super(props)
        this.state = {
            journalInput : ""
        }
    }

    // READ ENTRIES // 

    displayEntries = () => {
        return this.props.habitJournalEntries.map(entry => {
            return (
                <HabitNote 
                    entry={entry}
                    transferTextContent = {this.deleteEntry}
                />
            )
        })
    }

    // ADDING ENTRIES //

    addEntry = () => {

        const updatedHabitList = [
            ...this.props.habitJournalEntries,
            this.state.journalInput 
        ]


        if(this.state.journalInput){
            this.props.changeHabitEntries(updatedHabitList )
            this.setState({
                journalInput: ""
            })
        }
    }

    // DELETING ENTRIES // 
    deleteEntry = (textContent) => {
        const index = this.props.habitJournalEntries.findIndex(entry => entry === textContent)
        
        const updatedEntries = this.props.habitJournalEntries
        updatedEntries.splice(index, 1)

        this.props.changeHabitEntries(updatedEntries)
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
                    {this.displayEntries()}
                </div>
            </motion.div>
        );
    }
}

export default HabitNotes;

        