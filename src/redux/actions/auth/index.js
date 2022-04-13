// ** Handle User Login
export const handleLogin = data => {
  return dispatch => {
    dispatch({type: 'LOGIN', data})
    // ** Add to user to localStorage
    localStorage.setItem('userData', JSON.stringify(data))
  }
}

// ** Handle User Logout
export const handleLogout = () => {
  return dispatch => {
    dispatch({type: 'LOGOUT'})
    // ** Remove user from localStorage
    localStorage.removeItem('userData')
  }
}

export const SET_AUTH_DATA = "SET_AUTH_DATA"

const authStatusSet = (data) =>  {
  return {
    type:SET_AUTH_DATA,
    payload: data
  }
}

export default authStatusSet



