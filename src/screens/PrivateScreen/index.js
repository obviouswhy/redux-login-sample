import './privateScreen.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/slices/login/loginSlice'

const PrivateScreen = () => {
  const dispatch = useDispatch()
  return (
    <div className={'private-screen-wrapper'}>
      <h1 className={'title'}>ログイン後画面</h1>
      <button
        className={'button'}
        aria-label="Log Out"
        onClick={() => dispatch(logOut())}>
        ログアウト
      </button>
    </div>
  )
}

export default PrivateScreen
