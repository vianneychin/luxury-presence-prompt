import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const useAos = () => {
  return useEffect(() => {
    AOS.init({
      duration: 750
    })
  }, [])
}

export default useAos
