import { createSlice } from '@reduxjs/toolkit'

interface Props {
  username: string
}

const initialState: Props = {
  username: null
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      return { username: payload }
    }
  }
})

export const { setUser } = user.actions
export default user.reducer
