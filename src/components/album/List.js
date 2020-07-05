import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'

const Styled = {}

Styled.item = styled.li`
  display: inline-block;
  width: 20%;
  padding: 12px 0 0 12px;
  box-sizing: border-box;
  vertical-align: top;
`

Styled.list = styled.ul`
  margin: -12px 0 0 -12px;

  .link_local {
    display: block;
    padding: 12px;
    background-color: #282828;
  }

  .thumbnail_local {
    display: block;
    width: 100%;
    height: 162px;
    background-color: #333;
  }

  .subject_local {
    display: inline-block;
    margin-top: 12px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    word-break: break-all;
  }

  .description_local {
    margin-top: 6px;
    font-size: 12px;
    color: #b3b3b3;
  }
`

const Item = ({ post, episode }) => {
  console.log('List.js → post: ', post)
  console.log('List.js → episode: ', episode)

  return (
    <Styled.item>
      <Link href={`/music/read/${post.number}`}>
        <a className="link_local">
          <span
            className="thumbnail_local"
            style={{
              backgroundImage: `url(http://localhost:4000/uploads/${post.thumbnail})`,
              backgroundPosition: '50% 50%',
              backgroundSize: 'cover'
            }}></span>
          <strong className="subject_local">{post.subject}</strong>
          <p className="description_local">{post.regdate}</p>
        </a>
      </Link>
    </Styled.item>
  )
}

Item.propTypes = {
  post: PropTypes.any,
  episode: PropTypes.any
}

const List = ({ loading, error, posts }) => {
  if (error) {
    return (
      <Styled.list>
        <li>에러가 발생하였습니다.</li>
      </Styled.list>
    )
  }

  return (
    <>
      {/* 읽어들이는 중이 아니고 목록(type: Array)이 존재한다면.. */}
      {!loading && posts && (
        <Styled.list>
          {posts.list.map((post, index) => (
            <Item post={post} key={index} />
          ))}
        </Styled.list>
      )}
    </>
  )
}

List.propTypes = {
  loading: PropTypes.any,
  error: PropTypes.any,
  posts: PropTypes.any
}

export default List
