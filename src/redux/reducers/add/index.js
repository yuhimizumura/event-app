import {SET_ADD_USER_DATA,REMOVE_ADD_USER_DATA} from "../../actions/add";

const initialState = {
    payload:Object
}

export const addUserReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ADD_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_ADD_USER_DATA:
      return {}
    default:
      return state
  }
}

