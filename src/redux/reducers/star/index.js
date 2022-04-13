import {SET_STAR_DATA} from "../../actions/star";

// **  Initial State
const initialState = {
    starData:Object
}

const starReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_STAR_DATA:
      return {
        startData:action.starData,
      }
    default:
      return state
  }
}

export default starReducer
