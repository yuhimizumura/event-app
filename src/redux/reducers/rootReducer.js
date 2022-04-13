// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import {authStatusReducer} from './auth'

const rootReducer = combineReducers({
  authStatus: authStatusReducer,
})

export default rootReducer
