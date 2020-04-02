import {FETCH_USER_HABITS} from "../actions/types"

export default(
    (state = [], action) => {
        switch(action.type){
            case FETCH_USER_HABITS:
                return action.payload
            default:
                return state
        }
    }
)