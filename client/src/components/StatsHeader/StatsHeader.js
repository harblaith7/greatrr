import React, { Component } from 'react';
import "./StatsHeader.scss"
import IndividualHabit from "../IndividualHabit/IndividualHabit";


class StatsHeader extends Component {

    constructor(props){
        super(props)
        this.state = {
            habits : [
                {
                    habit: "Wake up Early",
                    description: "Out of bed by 5AM",
                    duration: 5,
                    currentScore: 3,
                    color: "green"
                },
                {
                    habit: "Workout",
                    description: "1 hour of weight training",
                    duration: 6,
                    currentScore: 6,
                    color: "pink"
                },
                {
                    habit: "Read",
                    description: "30 minutes of reading",
                    duration: 3,
                    currentScore: 1,
                    color: "yellow"
                },
                {
                    habit: "Meditate",
                    description: "45 minutes of meditation in the morning",
                    duration: 6,
                    currentScore: 4,
                    color: "lightblue"
                },
                {
                    habit: "Basketball",
                    description: "2 hours of training",
                    duration: 5,
                    currentScore: 4,
                    color: "brown"
                },

            ]
        }
    }

    displayHabits = () => {
        return this.state.habits.map(habit => {
            return <IndividualHabit habitInfo = {habit} />
        })
    }

    render() {
        return (
            <div className="StatsHeader">
                <div className="StatsHeader__container">
                    <div className="StatsHeader__individual-habits-container">
                        <div className="StatsHeader__habits-container">
                            {this.displayHabits()}
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