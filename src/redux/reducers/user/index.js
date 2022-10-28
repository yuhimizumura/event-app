import {SET_SIGNINUSER_DATA,REMOVE_SIGNIN_USER_DATA} from "../../actions/user";

const initialState = {
    payload:Object
}

export const signInUserReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SIGNINUSER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_SIGNIN_USER_DATA:
      return {}
    default:
      return state
  }
}

