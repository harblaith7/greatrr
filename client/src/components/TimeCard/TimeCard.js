import React, { Component } from 'react';
import "./TimeCard.scss"

class TimeCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            times : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            wantedTimeRange : []
        }
    }

    displayTimeStamps = () => {
        return this.state.times.map(time => {
            return (
                <div className="TimeCard__stamp">

                </div>
            )
        })
    }

    render() {
        return (
            <div className="TimeCard">
                <div className="TimeCard__container">
                    <div className="TimeCard__stamps-container">
                        {this.displayTimeStamps()}
                    </div>
                </div>
            </div>
        );
    }
}

export default TimeCard;