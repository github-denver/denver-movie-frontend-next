import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { withRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import List from '../../components/album/List'
import { listPosts } from '../../modules/posts'
import { readEpisode } from '../../modules/episode'

const Result = () => {
  // const Result = ({ location }) => {
  const dispatch = useDispatch()

  const { posts, error, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    error: posts.error,
    loading: loading['posts/LIST_POSTS']
  }))

  // const { episode, error, loading } = useSelector(({ episode, loading }) => ({
  const { episode } = useSelector(({ episode, loading }) => ({
    episode: episode.posts,
    error: episode.error,
    loading: loading['episode/READ_EPISODE']
  }))

  useEffect(() => {
    dispatch(listPosts())
    dispatch(readEpisode())
  }, [dispatch])

  return (
    <List loading={loading} error={error} posts={posts} episode={episode} />
  )
}

Result.propTypes = {
  location: PropTypes.any
}

export default withRouter(Result)
