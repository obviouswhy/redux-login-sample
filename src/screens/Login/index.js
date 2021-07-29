import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  authUser,
  logOut,
  getLoggedIn,
  getAuthLoading,
} from '../../slices/login/loginSlice'
import styles from './Counter.module.css'

export const Login = () => {
  const isLoggedIn = useSelector(getLoggedIn)
  const isLoading = useSelector(getAuthLoading)
  const dispatch = useDispatch()
  const [user, setUser] = useState({ username: '', password: '' })

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>
          {isLoggedIn ? 'Logged In' : 'Logged Out'}
        </span>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>{isLoading ? 'Loading!!' : ''}</span>
      </div>
      <div className={styles.row}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            width: '20rem',
            flexDirection: 'column',
          }}>
          <label style={{ alignSelf: 'flex-start' }}>Username</label>
          <input
            className={styles.textbox}
            aria-label="Username Input"
            value={user.username}
            placeholder={'john12'}
            onChange={e =>
              setUser(prevState => ({ ...prevState, username: e.target.value }))
            }
          />
          <label>Password</label>
          <input
            className={styles.textbox}
            type={'password'}
            aria-label="Password Input"
            placeholder={'**********'}
            value={user.password}
            onChange={e =>
              setUser(prevState => ({ ...prevState, password: e.target.value }))
            }
          />
        </div>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Log In"
          onClick={() => dispatch(authUser(user))}>
          Log In
        </button>
        <button
          className={styles.button}
          aria-label="Log Out"
          onClick={() => dispatch(logOut())}>
          Log Out
        </button>
      </div>
    </div>
  )
}
