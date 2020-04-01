import React, { Component } from 'react';
import "./StatsHeader.scss"
import IndividualHabit from "../IndividualHabit/IndividualHabit"

class StatsHeader extends Component {
    render() {
        return (
            <div className="StatsHeader">
                <IndividualHabit/>
            </div>
        );
    }
}

export default StatsHeader;