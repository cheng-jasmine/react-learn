import { createStore, bindActionCreators, applyMiddleware } from "redux"

import reducer from "./reducer"
import { v4 as uuidv4 } from 'uuid';
import { createAddUserAction, createDeleteserAction } from "./action/usersAction";


const logger1 = store => next => action => {
    console.log("中间件1")
    console.log("旧数据:", store.getState())
    console.log("action:", action)
    next(action)
    console.log("新数据:", store.getState())
    console.log("")
}
// function logger1(store){
//     return function(next){
//         return function(action){
//             console.log("中间件1")
//             console.log("旧数据:", store.getState())
//             console.log("action:", action)
//             next(action)
//             console.log("新数据:", store.getState())
//             console.log("")
//         }
//     }
// }
const logger2 = store => next => action => {
    console.log("中间件2")
    console.log("旧数据:", store.getState())
    console.log("action:", action)
    next(action)
    console.log("新数据:", store.getState())
    console.log("")
}
// function logger2(store) {
//     return function (next) {
//         return function (action) {
//             console.log("中间件2")
//             console.log("旧数据:", store.getState())
//             console.log("action:", action)
//             next(action)
//             console.log("新数据:", store.getState())
//             console.log("")
//         }
//     }
// }

// 应用中间件，方式1
// const store = createStore(reducer, applyMiddleware(logger1, logger2))
//方式2：
const store = applyMiddleware(logger1, logger2)(createStore)(reducer)


const actionCreators = {
    addUser: createAddUserAction,
    deleteUser: createDeleteserAction
}
const actions = bindActionCreators(actionCreators, store.dispatch)
actions.addUser({
    id: 3,
    name: "cheng",
    age: 24
})
// actions.deleteUser(3)
