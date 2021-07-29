import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'
import Forbidden from '../../screens/403'

const AuthenticatedRoute = ({ children, isLoggedIn = false, ...rest }) => {
  return <>{isLoggedIn ? <Route {...rest}>{children}</Route> : <Forbidden />}</>
}

AuthenticatedRoute.propTypes = {
  children: PropTypes.node,
  isLoggedIn: PropTypes.bool,
}

export default AuthenticatedRoute
