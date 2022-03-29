import { createSlice } from '@reduxjs/toolkit'

interface InitialStateProps {
  isLoading: boolean
  isAuth: boolean
  error: string
}

const initialState: InitialStateProps = {
  isLoading: false,
  isAuth: false,
  error: ''
}

const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginPending: state => {
      state.isLoading = true
    },
    loginSuccess: state => {
      state.isLoading = false
      state.isAuth = true
      state.error = ''
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    },
    signOut: state => {
      state.isLoading = false
      state.isAuth = false
      state.error = ''
    }
  }
})

export const { loginPending, loginSuccess, loginFail, signOut } = login.actions
export default login.reducer
