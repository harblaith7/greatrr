import React, { Component } from 'react';
import axios from "axios";
import {connect} from 'react-redux'

class UserPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            habits : null
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.auth !== this.props.auth){
            axios.get(`/api/userhabits/${this.props.auth && this.props.auth._id}`)
            .then(response => {
                this.setState({
                    habits: response.data
                })
                
            })
        }
    }

    displayHabits = () => {
        return this.state.habits.map(habit => {
            return <h5>{habit}</h5>
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        
    }

    render() {
        return (
            <div>
                <h4>Add a habit</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"/>
                    <input type="submit"/>
                </form>
                Aye you logged in mate!
                <h2>Your habits</h2>
                <div>
                    {this.state.habits && this.displayHabits()}
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

export default connect(mapStateToProps)(UserPage);