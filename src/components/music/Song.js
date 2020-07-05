import React from 'react'
import PropTypes from 'prop-types'
// import Link from 'next/link'
import styled from 'styled-components'

const Styled = {}

Styled.Song = styled.a`
  display: block;
  position: relative;
  padding: 24px;
  color: #fff;
  word-break: break-all;

  &:hover,
  &:focus {
    background-color: #343434;
  }

  .emph_local {
    display: block;
    position: relative;
    padding-left: 24px;
    font-style: normal;
  }

  .icon_global {
    position: absolute;
    top: 2px;
    left: 0;
    width: 18px;
    height: 18px;
    background-color: #fff;
  }
`
const Song = ({ song, onPlayPlayer }) => {
  const { subject, writer, time, upload2 } = song
  console.log('Song.js → subject: ', subject)
  console.log('Song.js → writer: ', writer)
  console.log('Song.js → time: ', time)
  console.log('Song.js → upload2: ', upload2)

  const test = (event) => {
    const value = event.currentTarget.children[0].value
    console.log('Song.js → value: ', value)

    onPlayPlayer(value)
  }

  return (
    <Styled.Song href="#" onClick={test}>
      <input type="hidden" className="textfield_local" value={upload2} />
      <em className="emph_local">
        <span className="icon_global">아이콘</span>
        <span className="text_local">{subject}</span>
      </em>
      <span className="text_local">{writer}</span>
      <span className="text_local">{time}</span>
    </Styled.Song>
  )
}

Song.propTypes = {
  song: PropTypes.any,
  onPlayPlayer: PropTypes.any
}

export default Song
