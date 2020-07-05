import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga'
import * as postsAPI from '../lib/api/posts'
import { takeLatest } from 'redux-saga/effects'

// 액션 타입을 선언합니다.
// 한 요청당 세 개를 만들어야 합니다.
const [
  READ_POST,
  READ_POST_SUCCESS,
  READ_POST_FAILURE
] = createRequestActionTypes('post/READ_POST')

const UNLOAD_POST = 'post/UNLOAD_POST' // 포스트 페이지에서 벗어날 때 데이터를 비웁니다.

// 액션 생성 함수를 생성합니다.
export const readPost = createAction(READ_POST, (number) => number)

export const unloadPost = createAction(UNLOAD_POST)

// saga를 생성합니다.
const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost)
// console.log('modules → post.js → listPostsSaga: ', listPostsSaga)

export function* postSaga() {
  console.log('modules → post.js → export function* postSaga() { .. }')

  yield takeLatest(READ_POST, readPostSaga)
}

// 초기 상태를 선언합니다.
// 요청의 로딩 중 상태는 loading 객체에서 관리합니다.
const initialState = {
  post: null,
  error: null
}

const post = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => {
      console.log('modules → post.js → state: ', state)
      console.log('modules → post.js → post: ', post)

      return { ...state, post }
    },
    [READ_POST_FAILURE]: (state, { payload: error }) => ({ ...state, error }),
    [UNLOAD_POST]: () => initialState
  },
  initialState
)

export default post
