import React, { Component } from 'react';
import {connect} from "react-redux"
import {updateUserHabits} from "../../actions/index"

class WeekBox extends Component {

    constructor(props){
        super(props)
        this.state = {
            isCompleted : false
        }
    }

    handleClick = () => {
        this.setState({
            isCompleted : !this.state.isCompleted
        })
        this.props.updateUserHabits(this.props.auth._id, this.props.habitId)
    }

    render() {
        
        return (
            <div 
                className={`Modal__week-box ${this.state.isCompleted && "Modal__week-box--active"}`} 
                onClick={this.handleClick}
            >
                {this.props.week}
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => ({
    auth
})

export default connect(mapStateToProps, {updateUserHabits})(WeekBox);