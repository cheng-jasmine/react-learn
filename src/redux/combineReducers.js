import isPlainObject from "./utils/isPlainObject";
import actionTypes from "./utils/actionTypes";

function vaildateReducers(reducers) {
    if (typeof reducers !== "object") {
        throw new TypeError("reducers must be an object")
    }
    if (!isPlainObject(reducers)) {
        throw new TypeError("reducers must be a plain object")
    }
    // 验证reducers的返回结果是不是undefined
    for (const key in reducers) {
        if (Object.hasOwnProperty.call(reducers, key)) {
            const reducer = reducers[key];
            //传递一个特殊的type值
            let state = reducer(undefined, {
                type: actionTypes.INIT()
            })
            if (state === undefined) {
                throw new TypeError("reducers must not return undefined")
            }
            state = reducer(undefined, {
                type: actionTypes.UNKNOW()
            })
            if (state === undefined) {
                throw new TypeError("reducers must not return undefined")
            }
        }
    }
}

export default function (reducers) {
    //1、验证
    vaildateReducers(reducers)
    /**
     * 返回的是一个renducers
    */
    return function (state = {}, action) {
        const newState = {}
        for (const key in reducers) {
            if (Object.hasOwnProperty.call(reducers, key)) {
                const reducer = reducers[key];
                newState[key] = reducer(state[key], action)
            }
        }
        return newState
    }
}