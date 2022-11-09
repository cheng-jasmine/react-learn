import { createStore, bindActionCreators } from "../redux"

import reducer from "./reducer"
import { v4 as uuidv4 } from 'uuid';
import { createAddUserAction, createDeleteserAction } from "./action/usersAction";


const store = createStore(reducer)


// const unListen = store.subscribe(() => {
//     console.log("监听器1：", store.getState())
// })
// store.dispatch(createAddUserAction({
//     id: 3,
//     name: "cheng",
//     age: 24
// }))
// store.dispatch(createDeleteserAction(3))
// unListen() // 取消监听

const oldDispatch = store.dispatch
store.dispatch = function (action) {
    console.log("旧数据:", store.getState())
    console.log("action:", action)
    oldDispatch(action)
    console.log("新数据:", store.getState())
    console.log("")
}



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
actions.deleteUser(3)
