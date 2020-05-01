import React, { Component } from 'react';
import "./SideNav.scss"
import clock from "../../assets/svg/square.svg"
import goal from "../../assets/svg/business.svg";
import {Link} from "react-router-dom"
import {connect} from "react-redux"

class SideNav extends Component {

    displayAbbreviation = () => {

            if(this.props.auth){
                const abbreviation = this.props.auth.fullName.split(" ").map(name => {
                    return name[0]
                }).join("")
    
                return abbreviation
            }
        
    }

    

    render() {
        return (
            <div className="SideNav">
                <div className="SideNav__container">
                    <div className="SideNav__user-container">
                        <div className="SideNav__user-circle">
                            <h2 className="SideNav__user-abbreviation" data-testid="name-abbreviation">
                                 {this.displayAbbreviation()}
                            </h2>
                        </div>
                        <p className="SideNav__full-name">
                            {this.props.auth.fullName}
                        </p>
                    </div>
                    <div className="SideNav__links-container">
                        <Link to="/logged" className="SideNav__link-container">
                            <img src={goal} alt="" className="SideNav__icon"/>
                            <h4  className="SideNav__link-title">
                                Habit Tracker
                            </h4>
                        </Link>
                        <div className="SideNav__link-container">
                            <img src={clock} alt="" className="SideNav__icon"/>
                            <h4 className="SideNav__link-title">
                                Time & Day Tracker
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => ({
    auth
})


export default connect(mapStateToProps)(SideNav);