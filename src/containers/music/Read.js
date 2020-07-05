import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useCallback } from 'react'
import { withRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import Read from '../../components/music/Read'
import { readPost, unloadPost } from '../../modules/post'
import { readEpisode, unloadEpisode } from '../../modules/episode'
import { playPlayer } from '../../modules/player'
// import { playPlayer, pausePlayer, stopPlayer } from '../../modules/player'

const Result = ({ location, match, history, number }) => {
  console.log('Read.js → location: ', location)
  console.log('Read.js → match: ', match)
  console.log('Read.js → history: ', history)

  const dispatch = useDispatch()

  const { post, error, loading, episode } = useSelector(
    // const { post, error, loading, player } = useSelector(
    ({ post, error, loading, player, episode }) => {
      console.log('Read.js → post: ', post)
      console.log('Read.js → error: ', error)
      console.log('Read.js → loading: ', loading)
      console.log('Read.js → player: ', player)
      console.log('Read.js → episode: ', episode)

      return {
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST'],
        episode: episode.episode
      }
    }
  )

  console.log('Read.js → error: ', error)

  useEffect(() => {
    dispatch(readPost(number))
    dispatch(readEpisode(number))

    // 언 마운트 될 때 리덕스에서 포스트 데이터를 비웁니다.
    return () => {
      dispatch(unloadPost())
      dispatch(unloadEpisode())
    }
  }, [dispatch, number])

  const onPlayPlayer = useCallback((test) => dispatch(playPlayer(test)), [
    dispatch
  ])

  return (
    <Read
      loading={loading}
      error={error}
      post={post}
      episode={episode}
      onPlayPlayer={onPlayPlayer}
    />
  )
}

Result.propTypes = {
  location: PropTypes.any,
  match: PropTypes.any,
  history: PropTypes.any,
  number: PropTypes.any
}

export default withRouter(Result)
