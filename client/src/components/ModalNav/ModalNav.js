import React, { Component } from 'react';
import "./ModalNav.scss"

class ModalNav extends Component {
    render() {
        return (
            <div className="ModalNav">
                <div className="ModalNav__container">
                    <ul className="ModalNav__list">
                        <li className="ModalNav__list-item">
                            <a href="/" className="ModalNav__link">
                                Points
                            </a>
                        </li>
                        <li className="ModalNav__list-item">
                            <a href="/" className="ModalNav__link">
                                Stats
                            </a>
                        </li>
                        <li className="ModalNav__list-item">
                            <a href="/" className="ModalNav__link">
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ModalNav;