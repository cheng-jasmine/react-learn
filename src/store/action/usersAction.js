export const ADDUSER = Symbol("add-user")
export const DELETEUSER = Symbol("delete-user")
export const UPDATEUSER = Symbol("update-user")

export const createAddUserAction = (user) => ({
    type: ADDUSER,
    payload: user
})

export const createDeleteserAction = (id) => ({
    type: DELETEUSER,
    payload: id
})

export const createUpdateUserAction = (id, newUserDate) => ({
    type: UPDATEUSER,
    payload: {
        ...newUserDate,
        id
    }
})
