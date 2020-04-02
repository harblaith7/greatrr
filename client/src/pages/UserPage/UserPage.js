import React, { Component } from 'react';
import axios from "axios";
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import StatsHeader from "../../components/StatsHeader/StatsHeader";
import {fetchUserHabits} from "../../actions"

class UserPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            habits : null,
            habitInput: ""
        }
    }

    async componentDidUpdate(prevProps){
        if(prevProps.auth !== this.props.auth){
            await this.props.fetchUserHabits(this.props.auth._id)
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
            return <h5 key={uuidv4()}>{habit}</h5>
        })
    }

    render() {
        return (
            <div>
                <StatsHeader/>
            </div>
        );
    }
}

function mapStateToProps({auth, userHabits}){
    return {
        auth,
        userHabits
    }
}

export default connect(mapStateToProps, {fetchUserHabits})(UserPage);