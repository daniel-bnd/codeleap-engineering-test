import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import postsReducer from './postsSlice'

const store = configureStore({
  reducer: {
    posts: postsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
