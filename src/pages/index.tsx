import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import CodeLeap from '../assets/codeleap_logo_black 1.svg'
import SignInModal from '../components/SignInModal'
import { Container, Login } from '../styles/pages/Home'

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Container>
      <Head>
        <title>CodeLeap</title>
      </Head>

      {isModalOpen && <SignInModal />}

      <CodeLeap />
      <Login onClick={() => setIsModalOpen(!isModalOpen)}>Sign In</Login>
    </Container>
  )
}

export default Home
