import React from 'react'
import styled from 'styled-components'
import YouTube from '../youtube/Player'

const Player = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 120px;
  font-size: 14px;
  color: #fff;
  background-color: #282828;
`

const Result = () => (
  <Player>
    <YouTube />
  </Player>
)

export default Result
