import React from 'react'
import { Wrapper } from './styled'
import Top from './Top'

const Container = () => {
  return (
    <Wrapper>
      <div className="Top">
        <div className="Top-Left">
          <input />
          <div className="Hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="Top-Right"></div>
      </div>
      <div className="Bottom">
        <div className="Bottom-Left"></div>
        <div className="Bottom-Right"></div>
      </div>
    </Wrapper>
  )
}

export default Container
