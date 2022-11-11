
// 对学生查询条件改变的action的类型
export const actionTypes = {
    change: Symbol("change")
}

// 根据新的查询条件，产生一个action
export function change(newCondition) {
    return {
        type: actionTypes.change,
        payload: newCondition
    }
}