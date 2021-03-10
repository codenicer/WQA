import axios from 'axios'
import { useState } from 'react'
import styles from '../../styles/admin-signup.module.scss'

export default function Signin() {
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()

    axios.post('/api/signin', {
      password,
      username,
    })
  }

  return (
    <div className={styles.signin_container}>
      <div className={styles.signin_form_container}>
        <form onSubmit={handleOnSubmit} className={styles.form}>
          <h1 className={styles.form_title}>Signup</h1>
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
