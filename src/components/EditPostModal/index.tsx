import { NextPage } from 'next'
import { useState } from 'react'
import { closeEditModal } from '../../redux/editModalSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { editPost } from '../../redux/postsSlice'
import { RootState } from '../../redux/store'
import {
  Button,
  Container,
  Input,
  Label,
  Modal,
  TextArea,
  Title
} from './styles'

const EditPostModal: NextPage = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const editModal = useAppSelector((state: RootState) => state.editModal)
  const dispatch = useAppDispatch()

  function handleEditPost(e) {
    e.preventDefault()
    if (!title && !content) {
      dispatch(closeEditModal())
      return
    }
    if (title && !content) {
      dispatch(
        editPost({ id: editModal.id, title, content: editModal.content })
      )
      dispatch(closeEditModal())
      return
    }
    if (!title && content) {
      dispatch(editPost({ id: editModal.id, title: editModal.title, content }))
      dispatch(closeEditModal())
      return
    } else {
      dispatch(editPost({ id: editModal.id, title, content }))
      dispatch(closeEditModal())
    }
  }

  return (
    <Container>
      <Modal>
        <Title>Edit item</Title>
        <Label>Title</Label>
        <br />
        <form action="submit" onSubmit={e => handleEditPost(e)}>
          <Input
            type="text"
            name="title"
            placeholder="Hello world"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <br />
          <Label>Content</Label>
          <br />
          <TextArea
            name="content"
            placeholder="Content here"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <br />
          <Button type="submit">
            {!title && !content ? 'CANCEL' : 'SAVE'}
          </Button>
        </form>
      </Modal>
    </Container>
  )
}

export default EditPostModal
