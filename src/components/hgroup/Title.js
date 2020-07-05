import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Styled = {}

Styled.Title = styled.h2`
  margin-top: 36px;
  font-size: 28px;
  font-weight: bold;
  color: #fff;

  &:first-child {
    margin-top: 0;
  }
`

const Title = (props) => <Styled.Title>{props.children}</Styled.Title>

Title.propTypes = {
  children: PropTypes.any
}

export default Title
