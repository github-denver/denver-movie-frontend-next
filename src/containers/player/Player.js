import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { withRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import Player from '../../components/player/Player'
// import { playPlayer, pausePlayer, stopPlayer } from '../../modules/player'

const Result = ({ location }) => {
  console.log('Player.js → location: ', location)

  const dispatch = useDispatch()

  const url = useSelector((state) => state.player)
  console.log('Player.js → url: ', url)

  useEffect(() => {
    console.log('Player.js → useEffect(() => { .. })')
  }, [dispatch, url])

  return <Player />
}

Result.propTypes = {
  location: PropTypes.any
}

export default withRouter(Result)
