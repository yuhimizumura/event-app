import {SET_AUTH_DATA} from "../../actions/auth";

const initialState = {
  "nextAuthState": String
}

export const authStatusReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_DATA:
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}






