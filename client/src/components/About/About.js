import React, { Component } from 'react';
import "./About.scss";
import clock from "../../assets/svg/hour.svg";
import calendar from "../../assets/svg/calendar.svg"
import target from "../../assets/svg/target.svg"

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="About__container">
                    <div className="About__description-container">
                        <h2 className="About__heading">
                            What we do
                        </h2>
                        <p className="About__description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Amet at magnam asperiores, consequatur quasi atque tempora optio architecto alias
                        aperiam nihil vitae veniam veritatis laboriosam similique, placeat iste numquam saepe nostrum nisi accusantium, minus natus! Et ab dolorum omnis dolores.
                        </p>
                    </div>
                    <div className="About__card-container">
                        <div className="About__card">
                            <img src={clock} alt="" className="About__card-icon"/>
                            <h4 className="About__card-heading">
                                Measure efficiency to find out how you are using your time
                            </h4>
                            <div className="About__card-description">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda facere error excepturi similique fuga impedit aut quisquam voluptatibus est repellendus!
                            </div>
                        </div>
                        <div className="About__card">
                            <img src={calendar} alt="" className="About__card-icon"/>
                            <h4 className="About__card-heading">
                                Monitor how often you complete your daily habits
                            </h4>
                            <div className="About__card-description">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda facere error excepturi similique fuga impedit aut quisquam voluptatibus est repellendus!
                            </div>
                        </div>
                        <div className="About__card">
                            <img src={target} alt="" className="About__card-icon"/>
                            <h4 className="About__card-heading">
                                Stay accountable and motivated towards your goals
                            </h4>
                            <div className="About__card-description">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda facere error excepturi similique fuga impedit aut quisquam voluptatibus est repellendus!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;