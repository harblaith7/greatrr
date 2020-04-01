import React, { Component } from 'react';
import axios from "axios";
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

class UserPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            habits : null,
            habitInput: ""
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

    handleSubmit = async (e) => {
        e.preventDefault()
        if(this.state.habitInput){
            await axios.patch(`/api/addhabit/${this.props.auth._id}`, {habit : this.state.habitInput, habits: this.state.habits})
            const res = await axios.get(`/api/userhabits/${this.props.auth && this.props.auth._id}`)
            this.setState({
                habits : res.data,
                habitInput: ""
            })

        }
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    displayHabits = () => {
        return this.state.habits.map(habit => {
            return <h5 key={uuidv4()}>{habit} adnd</h5>
        })
    }

    render() {
        return (
            <div>
                <h4>Add a habit</h4>
                <form onSubmit={this.handleSubmit} >
                    <input type="text" name="habitInput" onChange={this.handleChange} value={this.state.habitInput}/>
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