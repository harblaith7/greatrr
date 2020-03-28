import React, { Component } from 'react';
import "./LandingPage.scss";
import Header from '../../components/Header/Header'
import About from '../../components/About/About'

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Header/>
                <About/>
            </div>
        );
    }
}

export default LandingPage;