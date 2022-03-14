import React from 'react'

import './LoadingIndicator.css'

const LoadingIndicator = () => (
  <div className='lds-ring'>
    <div />
    <div />
    <div />
    <div />
    <p>loading please wait...</p>
  </div>
)

export default LoadingIndicator
