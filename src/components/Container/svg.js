import React from 'react'
import styled from 'styled-components'

const AdminForms = ({ className, props }) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><
  path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z"/>
  <path fill={props} d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
  </svg>
}


export {
  AdminForms
}
