import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { Container, EnterButton, Input, Modal, Subtitle, Title } from './styles'

const SignInModal: NextPage = () => {
  const router = useRouter()
  const [username, setUsername] = useState<string>()
  const dispatch = useAppDispatch()

  const newUser = {
    id: 564,
    username,
    posts: []
  }

  function handleLogin(e) {
    e.preventDefault()
    if (username === 'user' || username === 'User') {
      router.push('/admin')
    } else {
      alert('Please fill the field with "User" to login')
    }
  }

  return (
    <Container>
      <Modal>
        <Title>Welcome to CodeLeap network!</Title>
        <Subtitle>Please enter your username</Subtitle>
        <form onSubmit={e => handleLogin(e)}>
          <Input
            type="text"
            placeholder="User"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <EnterButton type="submit">Enter</EnterButton>
        </form>
      </Modal>
    </Container>
  )
}

export default SignInModal
