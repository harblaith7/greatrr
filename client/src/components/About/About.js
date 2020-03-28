import React, { Component } from 'react';
import "./About.scss"

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="About__container">
                    <div className="About__description-container">
                        <h2 className="About__heading">
                            How we work
                        </h2>
                        <p className="About__description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Amet at magnam asperiores, consequatur quasi atque tempora optio architecto alias
                        aperiam nihil vitae veniam veritatis laboriosam similique, placeat iste numquam saepe nostrum nisi accusantium, minus natus! Et ab dolorum omnis dolores.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;