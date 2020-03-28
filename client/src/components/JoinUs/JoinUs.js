import React, { Component } from 'react';
import "./JoinUs.scss"

class JoinUs extends Component {
    render() {
        return (
            <div className="JoinUs">
                <div className="JoinUs__container">
                    <h2 className="JoinUs__heading">
                        Join over 2 million people who are achieving their goals one habit at a time!
                    </h2>
                    <button className="JoinUs__join-btn">
                        Join Now
                    </button>
                </div>
            </div>
        );
    }
}

export default JoinUs;