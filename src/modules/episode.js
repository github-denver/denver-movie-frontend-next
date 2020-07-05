import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga'
import * as postsAPI from '../lib/api/posts'
import { takeLatest } from 'redux-saga/effects'

// 액션 타입을 선언합니다.
// 한 요청당 세 개를 만들어야 합니다.
const [
  READ_EPISODE,
  READ_EPISODE_SUCCESS,
  READ_EPISODE_FAILURE
] = createRequestActionTypes('episode/READ_EPISODE')

const UNLOAD_EPISODE = 'episode/UNLOAD_EPISODE' // 포스트 페이지에서 벗어날 때 데이터를 비웁니다.

// 액션 생성 함수를 생성합니다.
export const readEpisode = createAction(READ_EPISODE, (number) => number)

export const unloadEpisode = createAction(UNLOAD_EPISODE)

// saga를 생성합니다.
const readEpisodeSaga = createRequestSaga(READ_EPISODE, postsAPI.readEpisode)
// console.log('modules → episode.js → listPostsSaga: ', listPostsSaga)

export function* episodeSaga() {
  console.log('modules → episode.js → export function* episodeSaga() { .. }')

  yield takeLatest(READ_EPISODE, readEpisodeSaga)
}

// 초기 상태를 선언합니다.
// 요청의 로딩 중 상태는 loading 객체에서 관리합니다.
const initialState = {
  episode: null,
  error: null
}

const episode = handleActions(
  {
    [READ_EPISODE_SUCCESS]: (state, { payload: episode }) => {
      console.log('modules → episode.js → state: ', state)
      console.log('modules → episode.js → episode: ', episode)

      return { ...state, episode }
    },
    [READ_EPISODE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error
    }),
    [UNLOAD_EPISODE]: () => initialState
  },
  initialState
)

export default episode
