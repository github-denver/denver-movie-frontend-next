import React from 'react'
import withLayout from '../src/components/withLayout'
import Title from '../src/components/hgroup/Title'
import Description from '../src/components/hgroup/Description'
import List from '../src/containers/music/List'

const Page = () => (
  <>
    <Title>새로 나왔어요!</Title>

    <Description>새로 나온 영화입니다.</Description>

    <List />
  </>
)

export default withLayout(Page)
