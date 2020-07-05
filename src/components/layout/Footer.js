import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = {}

Styled.Footer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 110;
  height: 120px;
  font-size: 14px;
  color: #fff;
  background-color: #0b0b0b;
`

const Footer = (props) => <Styled.Footer>{props.children}</Styled.Footer>

Footer.propTypes = {
  children: PropTypes.any
}

export default Footer
