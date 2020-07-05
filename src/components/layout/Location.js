import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Styled = {}

Styled.Location = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  left: 240px;
  background-color: #191919;
  font-size: 0;

  li {
    display: inline-block;
    margin: 4px;
    vertical-align: top;
  }

  li + li {
    margin-left: 0;
  }

  .link_local {
    display: block;
    width: 48px;
    height: 48px;
    color: #fff;
    background-color: #222;
  }
`

const Location = () => (
  <Styled.Location>
    <li>
      <Link href="/">
        <a className="link_local">
          <span className="icon_global"></span>
          <span className="text_local">이전</span>
        </a>
      </Link>
    </li>
    <li>
      <Link href="/">
        <a className="link_local">
          <span className="icon_global"></span>
          <span className="text_local">다음</span>
        </a>
      </Link>
    </li>
  </Styled.Location>
)

export default Location
