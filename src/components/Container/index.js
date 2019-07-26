import React from 'react'
import { Link } from 'react-router-dom'
import profileIcon from '../../assets/profile.png'
import graphOne from '../../assets/GraphOne.png'
import graphTwo from '../../assets/GraphTwo.png'
import arrow from '../../assets/arrow.svg'
import searchIcon from '../../assets/search.svg'
import settingsIcon from '../../assets/settings.svg'
import downArrow from '../../assets/down-arrow.svg'
import upArrow from '../../assets/up-arrow.svg'
import useAos from '../../hooks/useAos'
import useNavToggle from '../../hooks/useNavToggle'
import useAPI from '../../hooks/useAPI'
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
  useAos()
  const resources = useAPI()
  const { toggleNavBar, display } = useNavToggle()
  const { BrandPopularity, newFeedbacks, newOrders, totalProfit } =
    resources && resources.Totals
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

        <div className='Top-Right'>
          <div>
            <img src={searchIcon} />
            <input placeholder='Search...' />
          </div>
          <div>
            <div>
              <img src={profileIcon} />
              <select>
                <option />
              </select>
              <img src={downArrow} />
            </div>
          </div>
        </div>
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
              <Link to='/calendar' activeClassName='active'>
                <li>Calendar</li>
              </Link>
              <img src={arrow} style={{ visibility: 'hidden' }} />
            </div>
            <div>
              <Documentation props='#95A7C3' />
              <Link activeClassName='active'>
                <li>Documentation</li>
              </Link>
              <img src={arrow} style={{ visibility: 'hidden' }} />
            </div>
            <div>
              <Dashboard props='#95A7C3' />
              <Link activeClassName='active' to='/'>
                <li>Dashboard</li>
              </Link>
              <img src={arrow} style={{ visibility: 'hidden' }} />
            </div>
          </ul>
          <ul>
            <div>
              <AdminPlugins props='#95A7C3' />
              <Link activeClassName='active'>
                <li>Admin Plugins</li>
              </Link>
              <img src={arrow} />
            </div>
            <div>
              <AdminForms props='#95A7C3' />
              <Link activeClassName='active'>
                <li>Admin Forms</li>
              </Link>
              <img src={arrow} />
            </div>
            <div>
              <AdminLayouts props='#95A7C3' />
              <Link activeClassName='active'>
                <li>Admin Layouts</li>
              </Link>
              <img src={arrow} />
            </div>
          </ul>
          <ul>
            <div>
              <InformationPanels props='#95A7C3' />
              <Link activeClassName='active'>
                <li>Information Panels</li>
              </Link>
              <img src={arrow} />
            </div>
            <div>
              <Eccomerce props='#95A7C3' />
              <Link activeClassName='active'>
                <li>Ecommerce</li>
              </Link>
              <img src={arrow} />
            </div>
          </ul>
          <ul>
            <div>
              <UIElements props='#95A7C3' />
              <Link activeClassName='active'>
                <li>UI Elements</li>
              </Link>
              <img src={arrow} />
            </div>
            <div>
              <FormElements props='#95A7C3' />
              <Link activeClassName='active'>
                <li>Form Elements</li>
              </Link>
              <img src={arrow} />
            </div>
            <div>
              <Plugins props='#95A7C3' />
              <Link activeClassName='active'>
                <li>Plugins</li>
              </Link>
              <img src={arrow} />
            </div>
            <div>
              <Pages props='#95A7C3' />
              <Link activeClassName='active'>
                <li>Pages</li>
              </Link>
              <img src={arrow} />
            </div>
          </ul>
          <ul>
            <div>
              <ExecutiveMeeting props='#F7C95C' />
              <Link activeClassName='active'>
                <li>Executive Meeting</li>
              </Link>
              <img src={arrow} style={{ visibility: 'hidden' }} />
            </div>
            <div>
              <HelpDeskResign props='#EA5D50' />
              <Link activeClassName='active'>
                <li>HelpDesk Resign</li>
              </Link>
              <img src={arrow} style={{ visibility: 'hidden' }} />
            </div>
            <div>
              <SonyBoardMeeting props='#917DD6' />
              <Link activeClassName='active'>
                <li>Sony Board Meeting</li>
              </Link>
              <img src={arrow} style={{ visibility: 'hidden' }} />
            </div>
          </ul>
        </div>
        <div className='Bottom-Right'>
          <div className='Header'>
            <div data-aos='fade-left'>
              <h1>Dashboard</h1>
              <h2>dashboard & statistics</h2>
            </div>
            <div>
              <select>
                <option>17 January 2016 - 15 February 2016</option>
              </select>
              <img src={downArrow} />
              <button>
                <img src={settingsIcon} />
              </button>
            </div>
          </div>
          <div className='Main'>
            <div>
              <h1>Totals</h1>
              <h2>Last Week</h2>
            </div>
            <div>
              <div>
                <div>
                  <h1>{newFeedbacks}</h1>
                  <h2>New Feedbacks</h2>
                </div>
                <hr />
                <div>
                  <h1>{totalProfit}</h1>
                  <h2>Total Profit</h2>
                </div>
                <hr />
              </div>
              <div>
                <div>
                  <h1>{newOrders}</h1>
                  <h2>New Orders</h2>
                </div>
                <hr />
                <div>
                  <h1>{BrandPopularity}</h1>
                  <h2>BrandPopularity</h2>
                </div>
              </div>
            </div>
            <hr />

            <div>
              <div className='Site-Visits'>
                <div>
                  <h1>Site Visits</h1>
                  <h2>Weekly Stats</h2>
                </div>
                <div>
                  <button>NEW</button>
                  <button>RETURNING</button>
                </div>
              </div>
              <div className='Revenue'>
                <div>
                  <h1>Site Visits</h1>
                  <h2>Monthly Stats</h2>
                </div>
                <div>
                  <select>
                    <option>FILTER RANGE</option>
                  </select>
                  <img src={downArrow} />
                </div>
              </div>
            </div>
            <div className='Graph-Container'>
              <div className='Graph-One'>
                <img src={graphOne} />
              </div>
              <div className='Graph-Two'>
                <img src={graphTwo} />
                <div>
                  <div>
                    <label>Revenue:</label>
                    <h1>$13.274</h1>
                  </div>
                  <div>
                    <label>Tax:</label>
                    <h1>$19.962</h1>
                  </div>
                  <div>
                    <label>Shipment:</label>
                    <h1>$1.967</h1>
                  </div>
                  <div>
                    <label>Orders:</label>
                    <h1>529 479</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <hr style={{ margin: 0 }} /> */}
          </div>
          <button data-aos='fade-up' className='Footer'>
            <h3>2019 by Template Monster</h3>
            <img src={upArrow} />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Container
