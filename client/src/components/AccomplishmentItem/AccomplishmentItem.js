import React, { Component } from 'react';
import deleteIcon from "../../assets/svg/delete.svg"
import editIcon from "../../assets/svg/edit.svg"

class AccomplishmentItem extends Component {

    constructor(props){
        super(props)
        
        this.accomplishmentRef = React.createRef()
    }

    transferId = () => {
        this.props.transferId(this.accomplishmentRef.current.textContent)
    }

    transferTextContent = () => {
        this.props.deleteAccomplishment(this.accomplishmentRef.current.textContent)
    }


    render() {
        return (
            <div 
                className="HabitAccomplishments__item-container" 
                ref={this.accomplishmentRef}
            >
                {this.props.accomplishment}
                <div className="HabitAccomplishments__icon-container">
                    <img src={editIcon} alt="" className="HabitAccomplishments__icon" onClick={this.transferId}/>
                    <img src={deleteIcon} alt="" className="HabitAccomplishments__icon" onClick={this.transferTextContent}/>
                </div>
            </div>
        );
    }
}

export default AccomplishmentItem;