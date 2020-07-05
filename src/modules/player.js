import { createAction, handleActions } from 'redux-actions'

const PLAY_PLAYER = 'player/START_PLAYER'
const PAUSE_PLAYER = 'player/PAUSE_PLAYER'
const STOP_PLAYER = 'player/STOP_PLAYER'

// 요청을 위한 액션 타입을 payload로 설정합니다. (예를 들어, 'sample/GET_POST')

export const playPlayer = createAction(PLAY_PLAYER, (value) => {
  console.log('modules → player.js → value: ', value)

  return value
})

export const pausePlayer = createAction(
  PAUSE_PLAYER,
  (requestType) => requestType
)

export const stopPlayer = createAction(
  STOP_PLAYER,
  (requestType) => requestType
)

const initialState = {
  url: null
}

const player = handleActions(
  {
    [PLAY_PLAYER]: (state, { payload: url }) => {
      console.log('modules → player.js → state: ', state)
      console.log('modules → player.js → url: ', url)

      return {
        ...state,
        url: url
      }
    },
    [PAUSE_PLAYER]: (state, action) => ({
      ...state,
      [action.payload]: false
    }),
    [STOP_PLAYER]: (state, action) => ({
      ...state,
      [action.payload]: false
    })
  },
  initialState
)

export default player
