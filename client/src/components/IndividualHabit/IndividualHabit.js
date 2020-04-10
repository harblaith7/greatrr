import React, { Component } from 'react';
import "./IndividualHabit.scss"
import ProgressBar from "../ProgressBar/ProgressBar"
import diamond from "../../assets/svg/diamond.svg"

class IndividualHabit extends Component {
    render() {
        return (
            <div className="IndividualHabit">
                <div className="IndividualHabit__container">
                    <div className="IndividualHabit__content-container">
                        <img src="https://wrmyers.horizon.ab.ca/uploads/2699/basketball.jpg" alt="" className="IndividualHabit__habit-img"/>
                        <div className="IndividualHabit__text-container">
                            <h3 className="IndividualHabit__habit-title">
                                Basketball
                            </h3>
                            <p className="IndividualHabit__habit-description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae?
                            </p>
                            <div className="IndividualHabit__points-container">
                                <div className="IndividualHabit__bar-container">
                                    <ProgressBar/>
                                </div>
                                <div className="IndividualHabit__point-container">
                                    <h4 className="IndividualHabit__point">75</h4>
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

export default IndividualHabit;