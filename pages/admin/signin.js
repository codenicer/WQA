import axios from 'axios'
import { useState } from 'react'
import styles from '../../styles/admin-signin.module.scss'
import Router from 'next/router'

export default function Signin() {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('/api/auth/signin', {
        password,
        username,
      })

      if (res.status === 200) {
        document.cookie = `jwt=${res.data}; path=/`
        Router.push('/admin')
      }
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className={styles.signin_container}>
      <div className={styles.signin_form_container}>
        <form onSubmit={handleOnSubmit} className={styles.form}>
          <h1 className={styles.form_title}>Login</h1>
          <div className={styles.form_group}>
            <label
              htmlFor="username"
              className={styles.form_group_control_label}
            >
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              id="username"
              className={styles.form_group_control_input}
              placeholder="Username"
            />
          </div>
          <div className={styles.form_group}>
            <label
              htmlFor="password"
              className={styles.form_group_control_label}
            >
              Password
            </label>
            <input
              value={password}
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className={styles.form_group_control_input}
            />
          </div>
          <button className={styles.form_group_control_submit}> Submit</button>
        </form>
      </div>
    </div>
  )
}
