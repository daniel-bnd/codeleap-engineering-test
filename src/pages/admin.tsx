import { NextPage } from 'next'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addPost, asyncAddPosts } from '../redux/postsSlice'
import { RootState } from '../redux/store'

// import { Container } from './styles';

const Admin: NextPage = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state: RootState) => state.posts)

  useEffect(() => {
    dispatch(asyncAddPosts())
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            addPost({
              id: posts.length - 1,
              username: 'Jasdasdohn Doe',
              created_datetime: '2022-03-25T06:36:40.717931Z',
              title: 'John',
              content: 'doe'
            })
          )
        }}
      >
        Add Posts
      </button>
      {posts.map(post => (
        <p key={post.id}>{post.content}</p>
      ))}
    </div>
  )
}

export default Admin
