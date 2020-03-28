import React, { Component } from 'react';
import "./LandingPage.scss";
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Steps from '../../components/Steps/Steps'

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Header/>
                <About/>
                <Steps/>
            </div>
        );
    }
}

export default LandingPage;