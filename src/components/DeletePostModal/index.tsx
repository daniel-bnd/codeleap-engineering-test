import { NextPage } from 'next'
import { closeDeleteModal } from '../../redux/deleteModalSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { deletePost } from '../../redux/postsSlice'
import { RootState } from '../../redux/store'
import { Button, ConfirmationBox, Container, Message, Modal } from './styles'

const DeletePostModal: NextPage = () => {
  const dispatch = useAppDispatch()
  const post = useAppSelector((state: RootState) => state.deleteModal.id)

  function handleDeletePost() {
    dispatch(deletePost(post))
    dispatch(closeDeleteModal(false))
  }

  return (
    <Container>
      <Modal>
        <Message>Are you sure you want to delete this item?</Message>
        <ConfirmationBox>
          <Button
            onClick={() => {
              dispatch(closeDeleteModal(false))
            }}
          >
            Cancel
          </Button>
          <Button onClick={() => handleDeletePost()}>OK</Button>
        </ConfirmationBox>
      </Modal>
    </Container>
  )
}

export default DeletePostModal
