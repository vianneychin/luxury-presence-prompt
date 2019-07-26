import { useState, useEffect } from 'react'

const useSVG = () => {
  const [isTabActive, setIsTabActive] = useState(false)
  const [svgColor, setSvgColor] = useState('#95A7C3')
  // if you click a tab,
  // change the color of the SVG to the primary blue color.

  // the default color of the tab is #95A7C3
  return {
    isTabActive,
    svgColor
  }
}

export default useSVG
