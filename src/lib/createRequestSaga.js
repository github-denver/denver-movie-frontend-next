import { call, put } from 'redux-saga/effects'
import { startLoading, finishLoading } from '../modules/loading'

export const createRequestActionTypes = (type) => {
  console.log('createRequestSaga.js → type: ', type)

  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`

  return [type, SUCCESS, FAILURE]
}

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`

  return function* (action) {
    yield put(startLoading(type)) // 읽어들이는 중..

    // 파라미터로 action을 받으면 액션 정보를 조회할 수 있습니다.
    try {
      const response = yield call(request, action.payload)
      console.log('createRequestSaga.js → response: ', response)

      yield put({
        type: SUCCESS,
        payload: response.data
      })
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: event,
        error: true
      })
    }

    yield put(finishLoading(type)) // 완료
  }
}
