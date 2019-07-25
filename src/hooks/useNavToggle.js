import { useState, useEffect } from 'react'

const useNavToggle = () => {
  const [isNavHidden, setIsNavHidden] = useState(false)
  const [display, setDisplay] = useState('')
  const toggleNavBar = () =>
    !isNavHidden
      ? setIsNavHidden(() => true)
      : null || isNavHidden
      ? setIsNavHidden(() => false)
      : null
  useEffect(() => {
    return isNavHidden
      ? setDisplay(() => 'none')
      : null || !isNavHidden
      ? setDisplay(() => 'flex')
      : null
  }, [isNavHidden])
  return {
    display,
    toggleNavBar
  }
}

export default useNavToggle
