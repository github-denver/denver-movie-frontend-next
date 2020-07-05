/*
const loggerMiddleware = function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      // 미들웨어 기본 구조
    }
  }
}
*/

const loggerMiddleware = (store) => (next) => (action) => {
  // 미들웨어 기본 구조
  console.group()
  console.log(
    'loggerMiddleware.js → 상태(store.getState()): ',
    store.getState()
  )
  console.log('loggerMiddleware.js → 액션(action): ', action)
  console.log('loggerMiddleware.js → 액션(action.type): ', action.type)

  next(action) // 다음 미들웨어 혹은 리듀서에 전달
  console.log('')

  console.log('loggerMiddleware.js → 상태: ', store.getState()) // 업데이트된 상태
  console.groupEnd()
}

export default loggerMiddleware
