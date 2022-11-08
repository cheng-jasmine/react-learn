import { createStore, bindActionCreators } from "../redux"

import reducer from "./reducer"
import { v4 as uuidv4 } from 'uuid';
import { createAddUserAction, createDeleteserAction } from "./action/usersAction";


const store = createStore(reducer)


const unListen = store.subscribe(() => {
    console.log("监听器1：", store.getState())
})
// store.dispatch(createAddUserAction({
//     id: 3,
//     name: "cheng",
//     age: 24
// }))
// store.dispatch(createDeleteserAction(3))
// unListen() // 取消监听



const addUser = bindActionCreators(createAddUserAction, store.dispatch)
addUser({
    id: 3,
    name: "cheng",
    age: 24
})
