import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { authUser, getLoggedIn } from '../../redux/slices/login/loginSlice'
import './login.css'

export const Login = () => {
  const history = useHistory()
  const isLoggedIn = useSelector(getLoggedIn)
  const dispatch = useDispatch()
  const [user, setUser] = useState({ username: '', password: '' })

  useEffect(() => {
    isLoggedIn ? history.push('/private') : history.push('/')
  }, [isLoggedIn])

  return (
    <div className={'login-wrapper'}>
      <div className={'row'}>
        <h1 className={'title'}>ログイン画面</h1>
      </div>
      <>
        <div className={'row'}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              width: '20rem',
              flexDirection: 'column',
            }}>
            <label className={'textbox-label'}>ユーザー名</label>
            <input
              className={'textbox'}
              aria-label="Username Input"
              value={user.username}
              placeholder={'john12'}
              onChange={e =>
                setUser(prevState => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
            />
            <label className={'textbox-label'}>パスワード</label>
            <input
              className={'textbox'}
              type={'password'}
              aria-label="Password Input"
              placeholder={'**********'}
              value={user.password}
              onChange={e =>
                setUser(prevState => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className={'row'}>
          <button
            className={'button'}
            aria-label="Log In"
            onClick={() => dispatch(authUser(user))}>
            ログイン
          </button>
        </div>
      </>
    </div>
  )
}
