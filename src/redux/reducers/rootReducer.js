// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import {authStatusReducer} from './auth'
import {signInUserReducer} from './user'
import {addUserReducer} from "./add";

const rootReducer = combineReducers({
  authStatus: authStatusReducer,
  signInUser: signInUserReducer,
  addUser: addUserReducer
})

export default rootReducer
