import App from 'next/app'
import Head from 'next/head'

import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import withReduxSaga from 'next-redux-saga'
import rootReducer, { rootSaga } from '../src/modules'
// import { createLogger } from 'redux-logger'
import { ThemeProvider } from 'styled-components'

// import Player from '../src/components/player/Player'

import '../styles.css'

const themes = {
  colors: {
    primary: 'orange'
  }
}

// const makeStore = (initialState, { isServer, debug }) => {
const makeStore = (initialState) => {
  // const logger = createLogger()

  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]

  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    process.env.NODE_ENV !== 'production'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose

  const enhancer = composeEnhancers(
    // applyMiddleware(logger, ...middlewares)
    applyMiddleware(...middlewares)
    // other store enhancers if any
  )

  const store = createStore(rootReducer, initialState, enhancer)

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <ThemeProvider theme={themes}>
          <Head>
            <title>React.js + Next.js</title>
          </Head>

          <Component {...pageProps} />
        </ThemeProvider>

        {/* <iframe src="https://www.youtube.com/embed/F9K3sUFJmVQ" className="widget_media"></iframe> */}

        {/* <Player /> */}
      </Provider>
    )
  }
}

export default withRedux(makeStore, { debug: false })(withReduxSaga(MyApp))
