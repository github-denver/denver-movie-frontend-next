import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga'
import * as postsAPI from '../lib/api/posts'
import { takeLatest } from 'redux-saga/effects'

// 액션 타입을 선언합니다.
// 한 요청당 세 개를 만들어야 합니다.
const [
  LIST_POSTS,
  LIST_POSTS_SUCCESS,
  LIST_POSTS_FAILURE
] = createRequestActionTypes('posts/LIST_POSTS')

const UNLOAD_POST = 'posts/UNLOAD_POST' // 포스트 페이지에서 벗어날 때 데이터를 비웁니다.

// 액션 생성 함수를 생성합니다.
export const listPosts = createAction(
  LIST_POSTS
  // ({ tag, username, page }) => ({ tag, username, page })
)

export const unloadPost = createAction(UNLOAD_POST)

// saga를 생성합니다.
const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts)
// console.log('modules → posts.js → listPostsSaga: ', listPostsSaga)

export function* postsSaga() {
  console.log('modules → posts.js → export function* postsSaga() { .. }')

  yield takeLatest(LIST_POSTS, listPostsSaga)
}

// 초기 상태를 선언합니다.
// 요청의 로딩 중 상태는 loading 객체에서 관리합니다.
const initialState = {
  posts: null,
  error: null
}

const posts = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({ ...state, posts }),
    [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({ ...state, error }),
    [UNLOAD_POST]: () => initialState
  },
  initialState
)

export default posts
