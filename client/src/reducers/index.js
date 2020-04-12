import {combineReducers} from 'redux';
import authReducer from "./authReducer"
import habitsReducer from "./habitsReducer"
import selectedHabitReducer from "./selectedHabitReducer"

export default combineReducers({
    auth : authReducer,
    userHabits: habitsReducer,
    selectedHabit: selectedHabitReducer
})