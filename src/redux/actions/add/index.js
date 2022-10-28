export const SET_ADD_USER_DATA = "SET_ADD_USER_DATA"
export const REMOVE_ADD_USER_DATA = "REMOVE_ADD_USER_DATA"

// アクションクリエイター
const addUserSet = (data) =>  {

    return {
        type:SET_ADD_USER_DATA,
        payload:data,
    }

}

export const addUserRemove = () =>  {

    return {
        type: REMOVE_ADD_USER_DATA,
        payload: Object,
    }

}

export default addUserSet
