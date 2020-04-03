import React, { Component } from 'react';

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

export default WeekBox;