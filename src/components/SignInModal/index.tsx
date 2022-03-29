import { NextPage } from 'next'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks'
import { loginPending, loginSuccess } from '../../redux/loginSlice'
import { setUser } from '../../redux/userSlice'
import { Container, EnterButton, Input, Modal, Subtitle, Title } from './styles'

interface SignInModalProps {
  OnClose: any
}

const SignInModal: NextPage<SignInModalProps> = ({ OnClose = () => {} }) => {
  const router = useRouter()
  const [username, setUsername] = useState<string>()
  const dispatch = useAppDispatch()

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function handleLogin(e) {
    e.preventDefault()
    if (username === 'user' || username === 'User') {
      NProgress.start()
      dispatch(loginPending())
      await sleep(2000)
      dispatch(setUser(username))
      dispatch(loginSuccess())
      NProgress.done()
      router.push('/posts')
      return
    }
    alert('Please fill the field with "User" to login')
  }

  function handleOutsideClick(e) {
    if (e.target.id === 'SignInModal') OnClose()
  }

  return (
    <Container id="SignInModal" onClick={e => handleOutsideClick(e)}>
      <Modal>
        <Title>Welcome to CodeLeap network!</Title>
        <Subtitle>Please enter your username</Subtitle>
        <form onSubmit={e => handleLogin(e)}>
          <Input
            type="text"
            placeholder="User"
            value={username}
            onChange={e => setUsername(e.target.value.toLocaleLowerCase())}
            required
          />
          <EnterButton type="submit">Enter</EnterButton>
        </form>
      </Modal>
    </Container>
  )
}

export default SignInModal
