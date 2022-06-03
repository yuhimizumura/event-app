export const SET_SIGNINUSER_DATA = "SET_SIGNINUSER_DATA"

// アクションクリエイター
const signInUserSet = (data) =>  {

    return {
        type:SET_SIGNINUSER_DATA,
        payload:data,
    }

}

export default signInUserSet
