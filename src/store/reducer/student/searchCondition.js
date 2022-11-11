import { actionTypes } from "../../action/student/searchCondition"

//默认状态
const initialState = {
    page: 1,
    limit: 10,
    key: "",
    sex: -1,
}
/**
 * 控制查询条件的reducer
*/
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.change:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}
