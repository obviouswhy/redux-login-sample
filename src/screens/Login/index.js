import './login.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { handleLogin } from '../../redux/slices/login/loginSlice'

export const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [user, setUser] = useState({ username: '', password: '' })

  return (
    <div className={'login-wrapper'}>
      <div className={'row'}>
        <h1 className={'title'}>ログイン画面</h1>
      </div>
      <div className={'row'}>
        <div className={'input-wrapper'}>
          <label className={'textbox-label'}>ユーザー名</label>
          <input
            className={'textbox'}
            aria-label="Username Input"
            value={user.username}
            placeholder={'admin'}
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
          onClick={() =>
            dispatch(handleLogin(user)).then(res =>
              res ? history.push('/private') : null,
            )
          }>
          ログイン
        </button>
      </div>
      <div className={'row'}>
        <label className={'small-label'}>
          (ユーザー名はuserです。パスワードも123です)
        </label>
      </div>
    </div>
  )
}
