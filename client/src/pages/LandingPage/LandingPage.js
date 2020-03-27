import React, { Component } from 'react';
import "./LandingPage.scss";
import Header from '../../components/Header/Header'

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Header/>
            </div>
        );
    }
}

export default LandingPage;