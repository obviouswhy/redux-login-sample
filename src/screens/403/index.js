/* eslint-disable quotes */
import './forbidden.css'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Forbidden = () => {
  const history = useHistory()
  return (
    <div className={'forbidden-wrapper'}>
      <h1>403</h1>
      <h2>Forbidden Access</h2>
      <h3>
        {
          "Oops! The page you're trying to access is only available for Logged Users..."
        }
      </h3>
      <button
        className={'button'}
        aria-label="Log In"
        onClick={() => history.push('/')}>
        戻る
      </button>
    </div>
  )
}

export default Forbidden
