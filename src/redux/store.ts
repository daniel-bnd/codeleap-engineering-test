import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import deleteModalReducer from './deleteModalSlice'
import editModalReducer from './editModalSlice'
import loginReducer from './loginSlice'
import postsReducer from './postsSlice'
import userReducer from './userSlice'

const persistConfig = {
  timeout: 100,
  key: 'root',
  version: 1,
  storage
}

const persistedLoginReducer = persistReducer(persistConfig, loginReducer)
const persistedUserReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
  reducer: {
    posts: postsReducer,
    deleteModal: deleteModalReducer,
    user: persistedUserReducer,
    login: persistedLoginReducer,
    editModal: editModalReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store

export let persistor = persistStore(store)
