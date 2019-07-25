import React, { useState, useEffect } from 'react'
import { Wrapper } from './styled'
import { AdminForms } from './svg'

const Container = () => {
  const [isNavHidden, setIsNavHidden] = useState(false)
  const [display, setDisplay] = useState('')
  const toggleNavBar = () =>
    !isNavHidden ? setIsNavHidden(() => true) : null || isNavHidden ? setIsNavHidden(() => false) : null
  useEffect(() => {
    return isNavHidden ? setDisplay(() => 'none') : null || !isNavHidden ? setDisplay(() => 'flex') : null
  }, [isNavHidden])
  return (
    <Wrapper>
      <div className="Top">
        <div className="Top-Left">
          <input />
          <div onClick={toggleNavBar} className="Hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="Top-Right"></div>
      </div>
      <div className="Bottom">
        <div className="Bottom-Left" style={{ display: display }}>
          <ul>
            <div>
              <li>Calendar</li>
            </div>
            <div>
              <li>Documentation</li>
            </div>
            <div>
              <li>Dashboard</li>
            </div>
          </ul>
          <ul>
            <div>
              <li>Admin Plugins</li>
            </div>
            <div>
              <AdminForms props="#FFF" />
              <li>Admin Forms</li>
            </div>
            <div>
              <li>Admin Layouts</li>
            </div>
          </ul>
          <ul>
            <div>
              <li>Information Panels</li>
            </div>
            <div>
              <li>Ecommerce</li>
            </div>
          </ul>
          <ul>
            <div>
              <li>UI Elements</li>
            </div>
            <div>
              <li>Form Elements</li>
            </div>
            <div>
              <li>Plugins</li>
            </div>
            <div>
              <li>Pages</li>
            </div>
          </ul>
          <ul>
            <div>
              <li>Executive Meeting</li>
            </div>
            <div>
              <li>HelpDesk Resign</li>
            </div>
            <div>
              <li>Sony Board Meeting</li>
            </div>
          </ul>
        </div>
        <div className="Bottom-Right"></div>
      </div>
    </Wrapper>
  )
}

export default Container
