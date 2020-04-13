import axios from 'axios'
import {FETCH_USER, FETCH_USER_HABITS, SAVE_SELECTED_HABIT} from "./types"

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({type: FETCH_USER, payload: res.data})
}

export const addUserHabit = (userId, newHabit) => async dispatch => {
    const res = await axios.post(`/api/addhabit/${userId}`, newHabit)
    dispatch({type: FETCH_USER_HABITS, payload: res.data})
}

export const addUserHabits = (userId, newHabits) => async dispatch => {
    const res = await axios.post(`/api/addhabits/${userId}`, newHabits)
    dispatch({type: FETCH_USER_HABITS, payload: res.data})
}
    
export const fetchUserHabits = (userId) => async dispatch => {
    const res = await axios.get(`/api/userhabits/${userId}`)
    dispatch({type: FETCH_USER_HABITS, payload: res.data})
}

export const updateUserHabits = (userId, habitId, habit) => async dispatch => {
    const res = await axios.patch(`/api/updateHabit/${userId}/${habitId}`, {updatedHabit : habit})
    dispatch({type: FETCH_USER_HABITS, payload: res.data.habits})  
}

export const saveSelectedHabit = (selectedHabit) => async dispatch => {
    dispatch({type: SAVE_SELECTED_HABIT, payload: selectedHabit})
}
