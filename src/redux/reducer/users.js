import * as usersAction from "../action/usersAction"
import { v4 as uuidv4 } from 'uuid';

const initialState = [
    { id: uuidv4(), name: "用户1", age: 18 },
    { id: uuidv4(), name: "用户2", age: 20 }
]

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case usersAction.ADDUSER:
            return [...state, payload]
        case usersAction.DELETEUSER:
            // 删除
            return state.filter(it => it.id !== payload)
        case usersAction.UPDATEUSER:
            // 修改
            return state.map(it => it.id === payload.id ? { ...it, ...payload } : it)
        default:
            return state
    }
}
