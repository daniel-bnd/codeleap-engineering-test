import moment from 'moment'
import { NextPage } from 'next'
import React, { useEffect } from 'react'
import { openDeleteModal } from '../../redux/deleteModalSlice'
import { openEditModal } from '../../redux/editModalSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { asyncAddPosts } from '../../redux/postsSlice'
import { RootState } from '../../redux/store'
import {
  Container,
  Content,
  Delete,
  Edit,
  InfomationBox,
  PostBox,
  SettingsBox,
  Time,
  Title,
  User
} from './styles'

const PostsList: NextPage = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state: RootState) => state.posts)
  const user = useAppSelector((state: RootState) => state.user.username)

  useEffect(() => {
    dispatch(asyncAddPosts())
  }, [])

  return (
    <div>
      {posts.map(post => (
        <Container>
          <Title>
            <span>{post.title}</span>
            {user === post.username && (
              <SettingsBox>
                <Delete onClick={() => dispatch(openDeleteModal(post.id))} />
                <Edit
                  onClick={() =>
                    dispatch(
                      openEditModal({
                        id: post.id,
                        title: post.title,
                        content: post.content
                      })
                    )
                  }
                />
              </SettingsBox>
            )}
          </Title>
          <PostBox>
            <InfomationBox>
              <User>
                @
                {post.username.charAt(0).toUpperCase() + post.username.slice(1)}
              </User>
              <Time>{moment(post.created_datetime).fromNow()}</Time>
            </InfomationBox>
            <Content>{post.content}</Content>
          </PostBox>
        </Container>
      ))}
    </div>
  )
}

export default PostsList
