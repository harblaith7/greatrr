import React, { Component } from 'react';
import deleteIcon from "../../assets/svg/delete.svg"
import editIcon from "../../assets/svg/edit.svg"

class HabitNote extends Component {

    constructor(props){
        super(props)
        this.entryRef = React.createRef()
    }

    handleClick = () => {
        this.props.transferTextContent(this.entryRef.current.textContent)
    }

    render() {
        return (
            <div className="HabitNotes__note-container">
                <p className="HabitNotes__note" ref={this.entryRef}>
                   {this.props.entry}
                </p>
                <div className="HabitNotes__icon-container">
                    <img src={deleteIcon} alt="" className="HabitNotes__img" onClick={this.handleClick}/>
                    <img src={editIcon} alt="" className="HabitNotes__img"/>
                </div>
            </div>
        );
    }
}

export default HabitNote;