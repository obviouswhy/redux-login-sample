import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { autheticateUser } from '../../../utils/authAPI'

const initialState = {
  isLoggedIn: window.localStorage.getItem('isLoggedIn') === 'true' || false,
  isLoading: false,
}

export const authUser = createAsyncThunk('login/authUser', async user => {
  try {
    const res = await autheticateUser(user)
    return res.data.isAuth
  } catch (error) {
    alert(error.message)
    return false
  }
})

export const loginSlice = createSlice({
  name: 'login',
  initialState,

  reducers: {
    logOut: state => {
      state.isLoggedIn = false
      window.localStorage.setItem('isLoggedIn', false)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authUser.pending, state => {
        state.isLoading = true
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isLoggedIn = action.payload
        window.localStorage.setItem('isLoggedIn', action.payload)
      })
  },
})

export const { logOut, logIn } = loginSlice.actions

export const getLoggedIn = state => state.login.isLoggedIn
export const getAuthLoading = state => state.login.isLoading

export default loginSlice.reducer
