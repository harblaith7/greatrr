import React, { Component } from 'react';
import "./IndividualHabit.scss"

class IndividualHabit extends Component {
    render() {
        return (
            <div className="IndividualHabit">
                <div className="IndividualHabit__container">
                    <div className="IndividualHabit__description-container">
                        <div className="IndividualHabit__heading-container">
                            <h3 className="IndividualHabit__habit-title">
                                Wake up Early
                            </h3>
                            <p className="IndividualHabit__habit-description">
                                Out of bed by 5AM
                            </p>
                        </div>
                        <h2 className="IndividualHabit__count">
                            5
                        </h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndividualHabit;