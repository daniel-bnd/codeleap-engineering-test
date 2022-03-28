import { NextPage } from 'next'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addPost } from '../../redux/postsSlice'
import { RootState } from '../../redux/store'
import { Button, Container, Input, Label, Message, TextArea } from './styles'

const CreatePost: NextPage = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const id = Math.floor(Math.random() * 2000) + 2000

  const newPost = {
    id,
    username: 'User',
    created_datetime: new Date().toISOString(),
    title,
    content
  }

  const dispatch = useAppDispatch()
  const posts = useAppSelector((state: RootState) => state.posts)

  function handleCreatePost(e) {
    e.preventDefault()
    dispatch(addPost(newPost))
    setTitle('')
    setContent('')
  }

  return (
    <Container>
      <Message>What’s on your mind?</Message>
      <Label>Title</Label>
      <br />
      <form action="submit" onSubmit={e => handleCreatePost(e)}>
        <Input
          type="text"
          name="title"
          placeholder="Hello world"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <br />
        <Label>Content</Label>
        <br />
        <TextArea
          name="content"
          placeholder="Content here"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
        />
        <br />
        <Button type="submit" disabled={!title || !content}>
          CREATE
        </Button>
      </form>
    </Container>
  )
}

export default CreatePost
