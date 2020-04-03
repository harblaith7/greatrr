import {FETCH_USER_HABITS, UPDATE_USER_HABIT} from "../actions/types"

export default(
    (state = [], action) => {
        switch(action.type){
            case FETCH_USER_HABITS:
                return action.payload;
            case UPDATE_USER_HABIT:
                return action.payload;
            default:
                return state
        }
    }
)