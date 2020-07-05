import React from 'react'
import { useRouter } from 'next/router'
import withLayout from '../../../src/components/withLayout'
import Read from '../../../src/containers/music/Read'

const Page = () => {
  const router = useRouter()
  console.log('[page] → read → [number.js] → router: ', router)

  const { number } = router.query
  console.log('[page] → read → [number.js] → number: ', number)

  return (
    <>
      <Read number={number} />
    </>
  )
}

export default withLayout(Page)
