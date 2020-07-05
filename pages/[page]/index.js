import React from 'react'
import { useRouter } from 'next/router'
import Search from './Search'
import Library from './Library'

const Dynamic = () => {
  const router = useRouter()

  const { page } = router.query
  console.log('[page] → index.js → page: ', page)

  return (
    <>
      {page === 'search' ? <Search /> : page === 'library' ? <Library /> : null}
    </>
  )
}

export default Dynamic
