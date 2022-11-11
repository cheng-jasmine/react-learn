import { searchStudents } from "../../../services/index"

export const actionTypes = {
    setStudentsAndTotal: Symbol("setStudentsAndTotal"), // 设置学生查询结果数字和总数
    setIsLoading: Symbol("setIsLoading")
}

// 得到一个设置学生数组和总数的 
export function setStudentsAndTotal(arr, total) {
    return {
        type: actionTypes.setStudentsAndTotal,
        payload: {
            datas: arr,
            total: total
        }
    }
}

// 得到一个设置是否正在加载中的action
export function setIsLoading(isLoading) {
    return {
        type: actionTypes.setIsLoading,
        payload: isLoading
    }
}

// 根据仓库中的查询条件，查询学生
export function fetchStudents() {
    return async function (dispatch, getState) {
        dispatch(setIsLoading(true))
        const condition = getState().students.condition
        const resp = await searchStudents(condition)
        dispatch(setStudentsAndTotal(resp.datas, resp.cont))
        dispatch(setIsLoading(false))
    }
}