import React, { Component } from 'react';
import "./StatsHeader.scss"
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux'
import backgroundPath from "../../assets/svg/orangepath.svg"
import statsVector from "../../assets/svg/stats-diagram.svg"
import IndividualHabit from "../IndividualHabit/IndividualHabit"


class StatsHeader extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    displayHabits = () => {
        return this.props.userHabits.map(habit => {
            return <IndividualHabit habitInfo={habit} key={uuidv4()}/>
        })
    }

    render() {
        //console.log(this.props.userHabits)
        return (
            <div className="StatsHeader">
                <img src={backgroundPath} alt="" className="StatsHeader__background"/>
                <img src={statsVector} alt="" className="StatsHeader__vector"/>
                <div className="StatsHeader__container">
                    <div className="StatsHeader__habits-container">
                        <IndividualHabit/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({userHabits}) => ({
    userHabits
})

export default connect(mapStateToProps)(StatsHeader);



