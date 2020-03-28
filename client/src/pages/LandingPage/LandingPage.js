import React, { Component } from 'react';
import "./LandingPage.scss";
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Steps from '../../components/Steps/Steps'
import Testimonial from "../../components/Testimonial/Testimonial"
import JoinUs from "../../components/JoinUs/JoinUs"
import Footer from "../../components/Footer/Footer"

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Header/>
                <About/>
                <Steps/>
                <Testimonial/>
                <JoinUs/>
                <Footer/>
            </div>
        );
    }
}

export default LandingPage;