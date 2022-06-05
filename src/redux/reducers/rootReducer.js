// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import {authStatusReducer} from './auth'
import {signInUserReducer} from './user'

const rootReducer = combineReducers({
  authStatus: authStatusReducer,
  signInUser: signInUserReducer
})

export default rootReducer
