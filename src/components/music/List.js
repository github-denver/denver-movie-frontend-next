import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import Song from './music/Song'
// import Song from './Song'

const Styled = {}

Styled.Wrapper = styled.div`
  padding: 56px;

  .group_heading:first-child {
    margin-top: 0;
  }

  .group_heading {
    margin-top: 24px;
  }
  .group_preview {
    margin-top: 24px;
  }

  .group_episode {
    margin-top: 24px;
  }
`

const List = (props) => {
  console.log('props: ', props)

  const { subject, content, preview } = props.post.result[0]
  const episode = props.episode ? props.episode.result : []

  return (
    <Styled.Wrapper>
      <div className="group_heading">
        <h2 className="title_local">영상</h2>
        <p className="description_local">{subject}</p>
      </div>

      <div className="group_preview">
        <div className="group_half">
          <div className="inner_half">
            <iframe src={`https://www.youtube.com/embed/${preview}`}></iframe>
          </div>

          <div className="inner_half"></div>
        </div>
      </div>

      {episode.length > 0 && (
        <>
          <div className="group_heading">
            <h2 className="title_local">회차</h2>
            <p className="description_local">{subject}</p>
          </div>

          <div className="group_episode">
            <p
              className="description_local"
              dangerouslySetInnerHTML={{ __html: content }}></p>

            <div className="inner_episode">
              <ul className="list_episode">
                {episode.map((currentValue, index) => {
                  return (
                    <li key={index}>
                      <figure className="thumbnail_episode">
                        <img
                          src={`http://localhost:4000/uploads/${currentValue.thumbnail}`}
                          alt=""
                          className="image_local"
                        />
                      </figure>

                      <div className="group_half">
                        <div className="inner_half">
                          <strong className="title_episode">
                            {index + 1}. {currentValue.title}
                          </strong>
                        </div>
                        <div className="inner_half">
                          <span className="time_episode">
                            {currentValue.time}분
                          </span>
                        </div>
                      </div>

                      <p className="synopsis_episode">
                        {currentValue.synopsis}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </Styled.Wrapper>
  )
}

List.propTypes = {
  post: PropTypes.any,
  episode: PropTypes.any
}

export default List
