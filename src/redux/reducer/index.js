import loginUser from "./loginUser";
import users from "./users";

import { combineReducers } from "redux";

// 合并reducer

// export default (state = {}, action) => {
//     const newState = {
//         loginUser: loginUser(state.loginUser, action),
//         users: users(state.users, action)
//     }
//     return newState
// }


export default combineReducers({
    loginUser,
    users
})