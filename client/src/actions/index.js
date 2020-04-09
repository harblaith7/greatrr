import axios from 'axios'
import {FETCH_USER, FETCH_USER_HABITS} from "./types"

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload: res.data})
}

export const addUserHabit = (userId, newHabit) => async dispatch => {
    const res = await axios.post(`/api/addhabit/${userId}`, newHabit)
    dispatch({type: FETCH_USER_HABITS, payload: res.data})
}
    
export const fetchUserHabits = (userId) => async dispatch => {
    const res = await axios.get(`/api/userhabits/${userId}`)
    dispatch({type: FETCH_USER_HABITS, payload: res.data})
}

export const updateUserHabits = (userId, habitId) => async dispatch => {
    const res = await axios.patch(`/api/updateScore/${userId}/${habitId}`)
    dispatch({type: FETCH_USER_HABITS, payload: res.data.habits})  
}
