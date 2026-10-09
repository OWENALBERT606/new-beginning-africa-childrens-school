import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Client-side navigation keeps the previous scroll position; start each page at the top.
function ScrollManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollManager
