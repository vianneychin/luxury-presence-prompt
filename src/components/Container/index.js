import React, {useState, useEffect} from 'react'
import useAos from '../../hooks/useAos'
import {Wrapper} from './styled'
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
      <div className="Top">
        <div className="Top-Left">
          <input />
          <div onClick={toggleNavBar} className="Hamburger">
            <div />
            <div />
            <div />
          </div>
        </div>

        <div className="Top-Right" />
      </div>
      <div className="Bottom">
        <div
          className="Bottom-Left"
          data-aos="fade-right"
          style={{display: display}}
        >
          <ul>
            <div>
              <Calendar />
              <li>Calendar</li>
            </div>
            <div>
              <Documentation />
              <li>Documentation</li>
            </div>
            <div>
              <Dashboard />
              <li>Dashboard</li>
            </div>
          </ul>
          <ul>
            <div>
              <AdminPlugins props="" />
              <li>Admin Plugins</li>
            </div>
            <div>
              <AdminForms props="" />
              <li>Admin Forms</li>
            </div>
            <div>
              <AdminLayouts props="" />
              <li>Admin Layouts</li>
            </div>
          </ul>
          <ul>
            <div>
              <InformationPanels />
              <li>Information Panels</li>
            </div>
            <div>
              <Eccomerce />
              <li>Ecommerce</li>
            </div>
          </ul>
          <ul>
            <div>
              <UIElements />
              <li>UI Elements</li>
            </div>
            <div>
              <FormElements />
              <li>Form Elements</li>
            </div>
            <div>
              <Plugins />
              <li>Plugins</li>
            </div>
            <div>
              <Pages />
              <li>Pages</li>
            </div>
          </ul>
          <ul>
            <div>
              <ExecutiveMeeting />
              <li>Executive Meeting</li>
            </div>
            <div>
              <HelpDeskResign />
              <li>HelpDesk Resign</li>
            </div>
            <div>
              <SonyBoardMeeting />
              <li>Sony Board Meeting</li>
            </div>
          </ul>
        </div>
        <div className="Bottom-Right" />
      </div>
    </Wrapper>
  )
}

export default Container
