import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Styled = {}

Styled.Header = styled.header`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 240px;
  background-color: #030303;
`

Styled.Menu = styled.ul`
  li {
    padding: 0 6px;
  }

  a {
    display: block;
    padding: 4px 16px;
  }

  .icon_global {
    width: 36px;
    height: 36px;
    margin-right: 12px;
    background-color: #222;
    vertical-align: middle;
  }

  .text_local {
    display: inline-block;
    font-size: 14px;
    color: #ccc;
    vertical-align: middle;
  }

  a:hover,
  a:focus {
    background-color: #282828;
  }

  a:hover .text_local,
  a:focus .text_local {
    color: #fff;
  }
`

Styled.H1 = styled.h1`
  margin: 12px 0;
  text-align: center;

  .link_logo {
    display: inline-block;
    padding: 12px;
    font-size: 24px;
    color: #fff;
  }
`

const Header = () => (
  <Styled.Header>
    <Styled.H1>
      <Link href="/">
        <a className="link_logo">
          <span className="icon_global"></span>
          <span className="text_local">덴버무비</span>
        </a>
      </Link>
    </Styled.H1>

    <Styled.Menu>
      <li>
        <Link href="/">
          <a>
            <span className="icon_global"></span>
            <span className="text_local">홈</span>
          </a>
        </Link>
      </li>
      {/* <li>
        <Link href="/[page]" as="/library">
          <a>
            <span className="icon_global"></span>
            <span className="text_local">인기 있어요!</span>
          </a>
        </Link>
      </li> */}
      <li>
        <Link href="/[page]" as="/search">
          <a>
            <span className="icon_global"></span>
            <span className="text_local">새로 나왔어요!</span>
          </a>
        </Link>
      </li>
    </Styled.Menu>
  </Styled.Header>
)

export default Header
