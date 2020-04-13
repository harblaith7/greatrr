import React, { Component } from 'react';
import "./IndividualHabit.scss"
import ProgressBar from "../ProgressBar/ProgressBar"
import diamond from "../../assets/svg/diamond.svg"
import {connect} from "react-redux"
import {saveSelectedHabit} from "../../actions"

class IndividualHabit extends Component {

    handleClick = () => {
        this.props.saveSelectedHabit(this.props.userHabit)
    }

    render() {
        const {habitName, totalPoints, habitImage, dailyHabit, currentScore, habitDuration} = this.props.userHabit
        return (
            <div className="IndividualHabit" onClick={this.handleClick}>
                <div className="IndividualHabit__container">
                    <div className="IndividualHabit__content-container">
                        <img src={habitImage} alt="" className="IndividualHabit__habit-img"/>
                        <div className="IndividualHabit__text-container">
                            <h3 className="IndividualHabit__habit-title">
                                {habitName}
                            </h3>
                            <p className="IndividualHabit__habit-description">
                                {dailyHabit}
                            </p>
                            <div className="IndividualHabit__points-container">
                                <div className="IndividualHabit__bar-container">
                                    <ProgressBar
                                        currentScore={currentScore}
                                        habitDuration={habitDuration}
                                    />
                                </div>
                                <div className="IndividualHabit__point-container">
                                    <h4 className="IndividualHabit__point">{totalPoints}</h4>
                                    <img src={diamond} alt="" className="IndividualHabit__img"/>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {saveSelectedHabit})(IndividualHabit);