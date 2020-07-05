import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import Button from '../components/Button'

const Styled = {}

Styled.Wrapper = styled.div`
  .list_metadata {
    margin-top: 24px;
  }

  .description_local {
    margin-top: 24px;
  }

  .description_local + .description_local {
    margin-top: 4px;
  }
`

const Thumbnail = (props) => {
  const {
    // name,
    subject,
    content,
    thumbnail,
    logo,
    year,
    // preview,
    maturity,
    season,
    genre,
    star,
    creator
  } = props.post.result[0]

  return (
    <Styled.Wrapper {...props}>
      <div
        className="group_thumbnail"
        style={{
          backgroundImage: `url(http://localhost:4000/uploads/${thumbnail})`,
          backgroundSize: 'cover'
        }}>
        <div className="outer_cell">
          <div className="inner_cell">{subject}</div>
        </div>
      </div>

      <div className="group_information">
        <div className="outer_cell">
          <div className="inner_cell">
            <img
              src={`http://localhost:4000/uploads/${logo}`}
              alt=""
              className="image_local"
            />

            <strong className="subject_local">{subject}</strong>

            <ul className="list_metadata">
              <li>{year}</li>
              <li>{maturity}</li>
              {season && <li>시즌 {season}개</li>}
              <li>{genre}</li>
            </ul>

            <p
              className="text_synopsis"
              dangerouslySetInnerHTML={{ __html: content }}></p>

            <dl className="description_local">
              <dt>주연</dt>
              <dd>{star}</dd>
            </dl>

            {creator && (
              <dl className="description_local">
                <dt>제작자</dt>
                <dd>{creator}</dd>
              </dl>
            )}
          </div>
        </div>
      </div>
    </Styled.Wrapper>
  )
}

Thumbnail.propTypes = {
  post: PropTypes.any
}

export default Thumbnail
