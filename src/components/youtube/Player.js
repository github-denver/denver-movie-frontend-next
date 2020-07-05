import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
// import { playPlayer, pausePlayer, stopPlayer } from '../modules/player'
import styled from 'styled-components'

const Styled = {}

Styled.YouTube = styled.div`
  .inner_youtube {
    position: relative;
    top: 0;
    left: 0;
  }
`

Styled.play = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`

const Player = () => {
  let player

  const url = useSelector((state) => state.player)
  console.log('Player.js → url: ', url)

  useEffect(() => {
    console.log('Player.js → useEffect(() => { .. })')

    console.log('마운트 시 API 스크립트가 이미 준비되었는지 확인해 주세요.')

    const loadVideo = () => {
      console.log('Player.js → const loadVideo = () => { .. }')

      player = null

      console.log('Player 객체는 props의 id를 기반으로 고유하게 생성됩니다.')
      player = new window.YT.Player(`player`, {
        videoId: url.url === null ? 'JNvRON7H4qQ' : url.url,
        events: {
          // onReady: onPlayerReady
        }
      })

      console.log('Player.js → url.url: ', url.url)
      console.log('Player.js → player: ', player)
    }

    // const onPlayerReady = (event) => {
    //   event.target.playVideo()
    // }

    if (!window.YT) {
      console.log('Player.js → if (!window.YT) { .. }')
      console.log('그렇지 않은 경우 스크립트를 비동기적으로 준비합니다.')

      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'

      console.log(
        '스크립트를 읽어들인 후 onYouTubeIframeAPIReady에서 동영상을 준비합니다.'
      )
      window.onYouTubeIframeAPIReady = loadVideo

      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    } else {
      console.log('Player.js → { .. } else { .. }')

      const player = document.querySelector('#player')
      player.parentNode.removeChild(player)

      const createPlayer = document.createElement('div') // 요소를 생성합니다.
      createPlayer.setAttribute('id', 'player') // 속성을 설정합니다.

      const appendElement = document.querySelector('.inner_youtube')
      appendElement.appendChild(createPlayer)

      console.log('스크립트가 이미 있는 경우 호출합니다.')

      loadVideo()
    }
  }, [url, player])
  // }, [])

  const playYoutube = () => {
    console.log('동영상 자동 실행 (모바일에서는 자동 실행되지 않습니다.)')
    player.playVideo()
  }

  // const pauseYoutube = () => {
  //   player.pauseVideo()
  // }

  // const stopYoutube = () => {
  //   player.seekTo(0, true) // 동영상의 시간을 0초로 설정합니다.
  //   player.stopVideo()
  // }

  return (
    <>
      <Styled.YouTube>
        <div className="inner_youtube">
          <div id="player" className={url.url}></div>
        </div>
      </Styled.YouTube>

      <Styled.play
        type="button"
        onClick={playYoutube}
        className={`button_youtube url.url`}>
        재생 / {url.url}
      </Styled.play>

      {/* <iframe src="https://www.youtube.com/embed/AJqhKWo89FQ"></iframe> */}
    </>
  )
}

export default Player
