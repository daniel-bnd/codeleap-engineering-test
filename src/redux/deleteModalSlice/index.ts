import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  id: null
}

const deleteModal = createSlice({
  name: 'deleteModal',
  initialState,
  reducers: {
    openDeleteModal(state, { payload }) {
      return { isOpen: true, id: payload }
    },
    closeDeleteModal(state, { payload }) {
      return { isOpen: payload, id: null }
    }
  }
})

export const { openDeleteModal, closeDeleteModal } = deleteModal.actions
export default deleteModal.reducer
