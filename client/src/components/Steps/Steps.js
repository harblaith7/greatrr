import React, { Component } from 'react';
import "./Steps.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Steps extends Component {
    render() {
        return (
            <div className="Steps">
                <div className="Steps__container">
                    <div className="Steps__description-container">
                        <ScrollAnimation animateIn='fadeIn' duration={.5} animateOnce >
                            <h2 className="Steps__heading">
                                Our Steps to Success
                            </h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn' delay={400} animateOnce >
                            <p className="Steps__description">
                                Lorem, ipsum dolor sit amet consectetur concurrently and abolamasment adipisicing elit. Atque, sunt praesentium. Totam repudiandae voluptate nihil facere, et esse ut, sed cupiditate minima, ad est ex qui quaerat amet. Aliquid explicabo nulla repellendus culpa minima saepe natus voluptatibus reiciendis nihil earum, laudantium iure odio labore suscipit nostrum tempore aspernatur mollitia at?
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        );
    }
}

export default Steps;