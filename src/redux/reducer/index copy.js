import * as actionType from "../action/action-type"

export default function reducer(state = 10, action) {
    switch(action.type){
        case actionType.Increase:
            return state + 1
        case actionType.Decrease:
            return state - 1
        case actionType.Set:
            return action.payload
        default:
            return state
    }
}