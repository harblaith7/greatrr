import React, { Component } from 'react';
import "./IndividualHabit.scss";
import Modal from '../Modal/Modal'

class IndividualHabit extends Component {
    render() {
        const {color, currentScore, duration} = this.props.habitInfo
        return (
            <div className="IndividualHabit" >
                <div className="IndividualHabit__color" style={{backgroundColor: color, width : `${currentScore/duration * 117.5}%`}}/>
                <div className="IndividualHabit__container">
                    <div className="IndividualHabit__description-container">
                        <div className="IndividualHabit__heading-container">
                            <h3 className="IndividualHabit__habit-title">
                                {this.props.habitInfo.habit}
                            </h3>
                            <p className="IndividualHabit__habit-description">
                                {this.props.habitInfo.description}
                            </p>
                        </div>
                        <div className="IndividualHabit__count-container">
                            <Modal/>
                            <h2 className="IndividualHabit__count">
                                {this.props.habitInfo.currentScore}
                            </h2>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default IndividualHabit;