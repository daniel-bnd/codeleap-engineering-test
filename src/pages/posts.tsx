import { NextPage } from 'next'
import { useEffect } from 'react'
import CreatePost from '../components/CreatePost'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { asyncAddPosts } from '../redux/postsSlice'
import { RootState } from '../redux/store'
import { Container, ContainerBox, PostsBox, Title } from '../styles/pages/Posts'

const Posts: NextPage = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state: RootState) => state.posts)

  useEffect(() => {
    dispatch(asyncAddPosts())
  }, [])

  return (
    <Container>
      <ContainerBox>
        <Title>CodeLeap Network</Title>
        <PostsBox>
          <CreatePost />
        </PostsBox>
      </ContainerBox>
    </Container>
  )
}

export default Posts
