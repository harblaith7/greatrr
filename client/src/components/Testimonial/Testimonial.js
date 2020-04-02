import React, { Component } from 'react';
import 'react-awesome-slider/dist/styles.css';
import './Testimonial.scss';
import aristotle from '../../assets/images/aristotle.jpg'



class Testimonial extends Component {
    render() {
        return (
            <div className="Testimonial">
                <div className="Testimonial__container">
                    <div className="Testimonial__img-container">
                        <img src={aristotle} alt="" className="Testimonial__img"/>
                    </div>
                    <p className="Testimonial__quote">
                        <span className="we-are">We are</span>  
                        <br/> 
                        what we repeatedly do. 
                        <br/> 
                        <span className="excellence">Excellence,</span>  
                        <br/> 
                        then, is not an act, 
                        <br/> 
                        <span className="habit">but a <span>habit.</span></span> 
                        <br/>
                        <span className="author">
                            - Arisotle
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Testimonial;