import './privateScreen.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { userLogOut } from '../../redux/slices/login/loginSlice'
import { useHistory } from 'react-router-dom'

const PrivateScreen = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <div className={'private-screen-wrapper'}>
      <h1 className={'title'}>ログイン後画面</h1>
      <button
        className={'button'}
        aria-label="Log Out"
        onClick={() =>
          dispatch(userLogOut()).then(res =>
            res ? history.replace('/') : null,
          )
        }>
        ログアウト
      </button>
    </div>
  )
}

export default PrivateScreen
