import isPlainObject from './utils/isPlainObject'
import actionTypes from './utils/actionTypes'


/**
 * 实现createStore的功能
 * @param {function} reducer 
 * @param {any} defaultState
 * */
export default function (reducer, defaultState) {

    let currentReducer = reducer, // 但钱使用的reducer
        currentState = defaultState

    const listeners = [] //记录所有的监听器（订阅者）

    function dispatch(action) {
        //验证action
        if (!isPlainObject(action)) {
            throw new Error("action must is a plain object")
        }
        //验证action的type属性是否存在
        if (action.type === undefined) {
            throw new Error("action must has a prototype of type")
        }
        currentState = currentReducer(currentState, action)

        // 运行所有的订阅者
        for (const listener of listeners) {
            listener()
        }
    }

    function getState() {
        return currentState
    }

    //添加一个监听器（订阅器）
    function subscribe(listener) {
        listeners.push(listener) // 将监听器加入到数组中
        let isRemove = false // 是否已经移除掉了
        return function () {
            if (isRemove) {
                return
            }
            const index = listeners.indexOf(listener)
            listeners.splice(index, 1)
            isRemove = true
        }
    }

    // 初始化仓库时，需要分发一次初始的action
    dispatch({
        type: actionTypes.INIT()
    })

    return {
        dispatch,
        getState,
        subscribe
    }
}
