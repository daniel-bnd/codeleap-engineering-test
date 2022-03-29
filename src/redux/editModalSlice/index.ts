import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  id: null,
  title: null,
  content: null
}

const editModal = createSlice({
  name: 'editModal',
  initialState,
  reducers: {
    openEditModal(state, { payload }) {
      return {
        isOpen: true,
        id: payload.id,
        title: payload.title,
        content: payload.content
      }
    },
    closeEditModal(state) {
      return { isOpen: false, id: null, title: null, content: null }
    }
  }
})

export const { openEditModal, closeEditModal } = editModal.actions
export default editModal.reducer
