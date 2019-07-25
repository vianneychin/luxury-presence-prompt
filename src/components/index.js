import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Container from './Container'
import './Global.css'

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Container} />
      <Route path='/calendar' component={Container} />
      <Route path='/documentation' component={Container} />
      <Route path='/admin-plugins' component={Container} />
      <Route path='/admin-forms' component={Container} />
      <Route path='/admin-layouts' component={Container} />
      <Route path='/information-panels' component={Container} />
      <Route path='/ecommerce' component={Container} />
      <Route path='/ui-elements' component={Container} />
      <Route path='/form-elements' component={Container} />
      <Route path='/plugins' component={Container} />
      <Route path='/pages' component={Container} />
      <Route path='/executive-meeting' component={Container} />
      <Route path='/helpdesk-resign' component={Container} />
      <Route path='/sony-board-meeting' component={Container} />
    </BrowserRouter>
  )
}

export default App
