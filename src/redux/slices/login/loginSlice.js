import { createSlice } from '@reduxjs/toolkit'
import { autheticateUser } from '../../../utils/authAPI'

const initialState = {
  isLoggedIn: window.localStorage.getItem('isLoggedIn') === 'true' || false,
  isLoading: false,
}

export const handleLogin = user => async dispatch => {
  dispatch(setLoading(true))
  try {
    const res = await autheticateUser(user)
    dispatch(logIn())
    dispatch(setLoading(false))
    return res.data.isAuth
  } catch (error) {
    dispatch(logOut())
    dispatch(setLoading(false))
    alert(error.message)
    return false
  }
}

export const handleLogout = () => async dispatch => {
  dispatch(logOut())
  return true
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,

  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    logIn: state => {
      state.isLoggedIn = true
      window.localStorage.setItem('isLoggedIn', true)
    },
    logOut: state => {
      state.isLoggedIn = false
      window.localStorage.setItem('isLoggedIn', false)
    },
  },
})

export const { logOut, logIn, setLoading } = loginSlice.actions

export const getLoggedIn = state => state.login.isLoggedIn
export const getAuthLoading = state => state.login.isLoading

export default loginSlice.reducer
