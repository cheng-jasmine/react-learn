import { createStore } from "redux"

import reducer from "./reducer"
import { v4 as uuidv4 } from 'uuid';
import { createAddUserAction } from "./action/usersAction";


const store = createStore(reducer)

console.log(store.getState())

store.dispatch(createAddUserAction({
    id: uuidv4(),
    name: "cheng",
    age: 24
}))

console.log(store.getState())
