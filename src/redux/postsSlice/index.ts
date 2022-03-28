import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { AppDispatch, AppThunk } from '../store'

interface Props {
  id: number
  username: string
  created_datetime: Date
  title: string
  content: string
}

const initialState: Props[] = []

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, { payload }) {
      return [...state, payload]
    },
    addPosts(state, { payload }) {
      return [...payload]
    }
  }
})

export const { addPost, addPosts } = posts.actions
export default posts.reducer

export function asyncAddPosts(): AppThunk {
  return async function (dispatch: AppDispatch) {
    await axios
      .get('http://localhost:3000/api/getAllPosts')
      .then(res => {
        dispatch(addPosts(res.data))
      })
      .catch(console.log)
  }
}
