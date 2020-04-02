import {combineReducers} from 'redux';
import authReducer from "./authReducer"
import habitsReducer from "./habitsReducer"

export default combineReducers({
    auth : authReducer,
    userHabits: habitsReducer
})