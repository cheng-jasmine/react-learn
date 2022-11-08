import * as actionType from "./action-type"

export function getIncreaseAction(){
    return {
        type: actionType.Increase
    }
}

export function getDecreaseAction(){
    return {
        type: actionType.Decrease
    }
}

export function getSetAction(newNumber){
    return {
        type: actionType.Set,
        payload: newNumber
    }
}