import React, { Component } from 'react';
import axios from "axios";
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import StatsHeader from "../../components/StatsHeader/StatsHeader";
import CreateHabitsForm from "../../components/CreateHabitsForm/CreateHabitsForm";
import {fetchUserHabits} from "../../actions"
import SideNav from "../../components/SideNav/SideNav"
import "./UserPage.scss"

import HabitSections from "../../components/HabitSections/HabitSections"

class UserPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            habits : null,
            habitInput: ""
        }
    }

    componentDidMount = () => {
        
    }

    // FETCHES ALL OF THE USERS HABITS //
    async componentDidUpdate(prevProps){
        if(prevProps.auth !== this.props.auth){
            await this.props.fetchUserHabits(this.props.auth._id)
        }
        if(prevProps.userHabits !== this.props.userHabits) {
            this.props.transferHabits(this.props.userHabits)
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

    displayItems = () => {
        setTimeout(() => {

        }, 10)
    }

    // CHECKS IF USER ALREADY HAS HABITS REGISTERED
    // IF NOT WILL RENDER FORM PAGE 
    // IF SO WILL RENDER USER HABIT INFO
    render() {
        console.log(this.props.userHabits)
        return (
            <div className="UserPage">
                {this.props.auth && (
                    <div className="UserPage__page">
                        {
                            this.props.userHabits.length ? (
                                <div className="UserPage__habit-page">
                                    <SideNav/>
                                    <div className="UserPage__habit-section">
                                        <StatsHeader/>
                                        <HabitSections/>
                                    </div>
                                    
                                </div>
                            ) : (
                                <CreateHabitsForm
                                    userName = {this.props.auth.givenName}
                                />
                            )
                        }
                    </div>
                )}
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