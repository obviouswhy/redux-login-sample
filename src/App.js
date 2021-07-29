import React from 'react'
import { Login } from './screens/Login'
import './App.css'
import { useSelector } from 'react-redux'
import { getAuthLoading, getLoggedIn } from './redux/slices/login/loginSlice'
import PrivateScreen from './screens/PrivateScreen'
import NotFound from './screens/404/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './utils/AuthenticatedRoute'

const App = () => {
  const isLoading = useSelector(getAuthLoading)
  const isLoggedIn = useSelector(getLoggedIn)
  return (
    <div className="App">
      {isLoading && (
        <div className={'loading-modal'}>
          <h1>読み込み中...</h1>
        </div>
      )}
      <Router>
        <Switch>
          <Route path={'/'} exact component={Login} />
          <AuthenticatedRoute
            exact
            path="/private"
            isLoggedIn={isLoggedIn}
            component={PrivateScreen}
          />
          <Route path={'*'} exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
