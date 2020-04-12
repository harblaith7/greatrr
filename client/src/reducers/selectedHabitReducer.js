import {SAVE_SELECTED_HABIT} from "../actions/types"

export default(
    (state = [], action) => {
        switch(action.type){
            case SAVE_SELECTED_HABIT:
                return action.payload;
            default:
                return state
        }
    }
)