/* eslint-disable quotes */
import './notFound.css'
import React from 'react'
import { useHistory } from 'react-router-dom'

const NotFound = () => {
  const history = useHistory()
  return (
    <div className={'not-found-wrapper'}>
      <h1>404</h1>
      <h2>Not Found</h2>
      <h3>
        {"Oops! Seems like the page you're trying to access does not exist..."}
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

export default NotFound
