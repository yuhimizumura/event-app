import {SET_SIGNINUSER_DATA} from "../../actions/user";

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
    default:
      return state
  }
}

