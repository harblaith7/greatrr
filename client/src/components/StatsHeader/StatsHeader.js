import React, { Component } from 'react';
import "./StatsHeader.scss"
import IndividualHabit from "../IndividualHabit/IndividualHabit";
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux'


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
                <div className="StatsHeader__container">
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({userHabits}) => ({
    userHabits
})

export default connect(mapStateToProps)(StatsHeader);




/* 

<div className="StatsHeader__individual-habits-container">
                        <div className="StatsHeader__habits-container">
                            {this.props.userHabits.length ? this.displayHabits() : ""}
                            hey Laith
                        </div> 
                    </div>
                    <div className="StatsHeader__total-stats-container">
                        hi
                    </div>


                    */