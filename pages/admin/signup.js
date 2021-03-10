import axios from 'axios'
import { useState } from 'react'
import styles from '../../styles/admin-signup.module.scss'
import Router from 'next/router'

export default function Signin() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmpassword] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      return alert('Password are not the same.')
    }
    try {
      const res = await axios.post('/api/auth/signup', {
        password,
        username,
        name,
      })

      if (res.status === 201) {
        document.cookie = `jwt=${res.data}; path=/`
        Router.push('/admin')
      }
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <form onSubmit={handleOnSubmit} className={styles.form}>
          <h1 className={styles.form_title}>Signup</h1>
          <div className={styles.form_group}>
            <label htmlFor="name" className={styles.form_group_control_label}>
              name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"
              className={styles.form_group_control_input}
              placeholder="Name"
            />
          </div>
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
          <div className={styles.form_group}>
            <label
              htmlFor="password"
              className={styles.form_group_control_label}
            >
              Password
            </label>
            <input
              value={confirmPassword}
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmpassword(e.target.value)}
              className={styles.form_group_control_input}
            />
          </div>
          <button className={styles.form_group_control_submit}> Submit</button>
        </form>
      </div>
    </div>
  )
}
