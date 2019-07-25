import React, { useState, useEffect } from 'react'
import useAos from '../../hooks/useAos'
import { Wrapper } from './styled'
import {
  Calendar,
  Dashboard,
  Documentation,
  AdminForms,
  AdminLayouts,
  AdminPlugins,
  InformationPanels,
  Eccomerce,
  UIElements,
  FormElements,
  Plugins,
  Pages,
  ExecutiveMeeting,
  HelpDeskResign,
  SonyBoardMeeting
} from './svg'

const Container = () => {
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
  useAos()
  return (
    <Wrapper>
      <div className='Top'>
        <div className='Top-Left'>
          <input />
          <div onClick={toggleNavBar} className='Hamburger'>
            <div />
            <div />
            <div />
          </div>
        </div>

        <div className='Top-Right' />
      </div>
      <div className='Bottom'>
        <div
          className='Bottom-Left'
          data-aos='fade-right'
          style={{ display: display }}
        >
          <ul>
            <div>
              <Calendar props='#95A7C3' />
              <li>Calendar</li>
            </div>
            <div>
              <Documentation props='#95A7C3' />
              <li>Documentation</li>
            </div>
            <div>
              <Dashboard props='#95A7C3' />
              <li>Dashboard</li>
            </div>
          </ul>
          <ul>
            <div>
              <AdminPlugins props='#95A7C3' />
              <li>Admin Plugins</li>
            </div>
            <div>
              <AdminForms props='#95A7C3' />
              <li>Admin Forms</li>
            </div>
            <div>
              <AdminLayouts props='#95A7C3' />
              <li>Admin Layouts</li>
            </div>
          </ul>
          <ul>
            <div>
              <InformationPanels props='#95A7C3' />
              <li>Information Panels</li>
            </div>
            <div>
              <Eccomerce props='#95A7C3' />
              <li>Ecommerce</li>
            </div>
          </ul>
          <ul>
            <div>
              <UIElements props='#95A7C3' />
              <li>UI Elements</li>
            </div>
            <div>
              <FormElements props='#95A7C3' />
              <li>Form Elements</li>
            </div>
            <div>
              <Plugins props='#95A7C3' />
              <li>Plugins</li>
            </div>
            <div>
              <Pages props='#95A7C3' />
              <li>Pages</li>
            </div>
          </ul>
          <ul>
            <div>
              <ExecutiveMeeting props='#95A7C3' />
              <li>Executive Meeting</li>
            </div>
            <div>
              <HelpDeskResign props='#95A7C3' />
              <li>HelpDesk Resign</li>
            </div>
            <div>
              <SonyBoardMeeting props='#95A7C3' />
              <li>Sony Board Meeting</li>
            </div>
          </ul>
        </div>
        <div className='Bottom-Right' />
      </div>
    </Wrapper>
  )
}

export default Container
