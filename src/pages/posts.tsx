import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useLayoutEffect } from 'react'
import CreatePost from '../components/CreatePost'
import DeletePostModal from '../components/DeletePostModal'
import EditPostModal from '../components/EditPostModal'
import PostsList from '../components/PostsList'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { signOut } from '../redux/loginSlice'
import { RootState } from '../redux/store'
import {
  Container,
  ContainerBox,
  PostsBox,
  SignOut,
  SignOutBox,
  Title
} from '../styles/pages/Posts'

const Posts: NextPage = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const login = useAppSelector((state: RootState) => state.login.isAuth)
  const deleteModal = useAppSelector(
    (state: RootState) => state.deleteModal.isOpen
  )
  const editModal = useAppSelector((state: RootState) => state.editModal.isOpen)

  useLayoutEffect(() => {
    if (!login) {
      router.push('/')
    }
  }, [login])

  return (
    <Container>
      {deleteModal && <DeletePostModal />}
      {editModal && <EditPostModal />}
      <ContainerBox>
        <Title>
          <span>CodeLeap Network</span>
          <SignOutBox onClick={() => dispatch(signOut())}>
            <span>Sign Out</span>
            <SignOut />
          </SignOutBox>
        </Title>
        <PostsBox>
          <CreatePost />
          <PostsList />
        </PostsBox>
      </ContainerBox>
    </Container>
  )
}

export default Posts
