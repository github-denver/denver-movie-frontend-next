import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = {}

Styled.Container = styled.section`
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  margin: 56px 0 0 240px;
  background-color: #121212;
`

const Container = (props) => (
  <Styled.Container>{props.children}</Styled.Container>
)

Container.propTypes = {
  children: PropTypes.any
}

export default Container
