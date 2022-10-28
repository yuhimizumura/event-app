export const SET_SIGNINUSER_DATA = "SET_SIGNINUSER_DATA"
export const REMOVE_SIGNIN_USER_DATA = "REMOVE_SIGNIN_USER_DATA"

// アクションクリエイター
const signInUserSet = (data) =>  {

    return {
        type:SET_SIGNINUSER_DATA,
        payload:data,
    }

}

export const signInUserRemove = () => {
    return {
        type: REMOVE_SIGNIN_USER_DATA,
        payload: Object,
    }
}

export default signInUserSet
