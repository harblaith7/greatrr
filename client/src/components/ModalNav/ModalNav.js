import React, { Component } from 'react';
import "./ModalNav.scss"

class ModalNav extends Component {

    constructor(props){
        super(props)
        this.state = {
            activeLink : "HabitStats"
        }
    }

    handleClick = (e) => {

        this.setState({
            activeLink: e.target.name
        })

        this.props.switchSection(e.target.name)
    }

    render() {

        const {activeLink} = this.state

        return (
            <div className="ModalNav" id="nav-modal">
                <div className="ModalNav__container">
                    <ul className="ModalNav__list">
                        <li className="ModalNav__list-item">
                            <a href="#nav-modal" 
                            className={`ModalNav__link ${activeLink === "HabitStats" && "ModalNav__link--active"}`} 
                            onClick={this.handleClick} 
                            name="HabitStats">
                                Habit Progression & Statistics
                            </a>
                        </li>
                        <li className="ModalNav__list-item">
                            <a href="#nav-modal" 
                            className={`ModalNav__link ${activeLink === "TotalStats" && "ModalNav__link--active"}`} 
                            onClick={this.handleClick} 
                            name="TotalStats">
                                Total Progression & Statistics
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