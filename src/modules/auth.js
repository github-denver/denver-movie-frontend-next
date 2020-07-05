import { createAction, handleActions } from 'redux-actions'

const SAMPLE_ACTION = 'auth/SAMPLE_ACTION'

export const sampleAction = createAction(SAMPLE_ACTION)

/* eslint-disable */
export function* authSaga() {
  console.log('modules → auth.js → export function* authSaga() { .. }')
}
/* eslint-enable */

const initialState = {}

const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state) => state
    // [SAMPLE_ACTION]: (state, action) => state
  },
  initialState
)

export default auth
