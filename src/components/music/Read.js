import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Thumbnail from '../Thumbnail'
import List from './List'

const Styled = {}

Styled.Read = styled.div`
  margin: -56px;
`

const Read = ({ loading, error, post, onPlayPlayer, episode }) => {
  console.log('posts → Read.js → error: ', error)

  if (error) {
    return <p>에러가 발생하였습니다.</p>
  }

  console.log('posts → Read.js → loading: ', loading)
  if (loading || !post) {
    return null
  }

  return (
    <>
      <Styled.Read>
        <Thumbnail post={post} className="thumbnail_local" />

        <List post={post} episode={episode} onPlayPlayer={onPlayPlayer} />
      </Styled.Read>
    </>
  )
}

Read.propTypes = {
  loading: PropTypes.any,
  error: PropTypes.any,
  post: PropTypes.any,
  onPlayPlayer: PropTypes.any,
  episode: PropTypes.any
}

export default Read
