import React from 'react'
import Header from './layout/Header'
import Container from './layout/Container'
import Contents from './Contents'
import Location from './layout/Location'
// import Footer from './layout/Footer'
// import Player from '../containers/player/Player'

const withLayout = (Page) => {
  return function _withLayout() {
    _withLayout.displayName = 'withLayout'

    return (
      <div>
        <Header></Header>

        <Container>
          <Location></Location>

          <Contents>
            <Page />
          </Contents>
        </Container>

        {/* <Footer><Player></Player></Footer> */}
      </div>
    )
  }
}

export default withLayout
