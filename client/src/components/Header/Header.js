import React, { Component } from 'react';
import "./Header.scss";
import goalBoard from "../../assets/svg/goal.svg"
import {connect} from "react-redux"

class Header extends Component {
    render() {
        console.log(this.props.auth)
        return (
            <div className="Header">
                <div className="Header__container">
                    <div className="Header__description-container">
                        <h1 className="Header__heading">
                            Follow your passions. Achieve your dreams.
                        </h1>
                        <p className="Header__description">
                            Achieve your goals by breaking them down into small daily habits. 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Sed ipsum vitae voluptatum repudiandae, sapiente dolores!
                        </p>
                        <div className="Header__btn-container">
                            <a href="/auth/google" className="Header__sign-in-btn Header__sign-in-btn--google">
                                Sign in with Google
                            </a>
                            <button className="Header__sign-in-btn Header__sign-in-btn--facebook">
                                Sign in with Facebook
                            </button>
                        </div>
                    </div>
                    <div className="Header__img-container">
                        <img src={goalBoard} alt="" className="Header__img"/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({auth}){
    return {
        auth
    }
}

export default connect(mapStateToProps)(Header);