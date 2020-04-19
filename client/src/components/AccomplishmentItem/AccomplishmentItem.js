import React, { Component } from 'react';
import uuid from "uuid/v4"
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


    render() {
        return (
            <div 
                className="HabitAccomplishments__item-container" 
                id={uuid()} 
                key={uuid()} 
                ref={this.accomplishmentRef}
            >
                {this.props.accomplishment}
                <div className="HabitAccomplishments__icon-container">
                    <img src={editIcon} alt="" className="HabitAccomplishments__icon" onClick={this.transferId}/>
                    <img src={deleteIcon} alt="" className="HabitAccomplishments__icon"/>
                </div>
            </div>
        );
    }
}

export default AccomplishmentItem;