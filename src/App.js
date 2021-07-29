import React from 'react'
import { Login } from './screens/Login'
import './App.css'
import { useSelector } from 'react-redux'
import { getAuthLoading } from './redux/slices/login/loginSlice'

const App = () => {
  const isLoading = useSelector(getAuthLoading)
  return (
    <div className="App">
      {isLoading && (
        <div className={'loading-modal'}>
          <h1>読み込み中...</h1>
        </div>
      )}
      <Login />
    </div>
  )
}

export default App
