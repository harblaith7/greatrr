import React, { Component } from 'react';
import "./StatsHeader.scss"
import IndividualHabit from "../IndividualHabit/IndividualHabit"

class StatsHeader extends Component {
    render() {
        return (
            <div className="StatsHeader">
                <div className="StatsHeader__container">
                    <div className="StatsHeader__individual-habits-container">
                        <div className="StatsHeader__habits-container">
                            <IndividualHabit/>
                            <IndividualHabit/>
                            <IndividualHabit/>
                            <IndividualHabit/>
                            <IndividualHabit/>
                            <IndividualHabit/>
                        </div> 
                    </div>
                    <div className="StatsHeader__total-stats-container">
                        hi
                    </div>
                </div>
            </div>
        );
    }
}

export default StatsHeader;