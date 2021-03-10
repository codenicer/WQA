import mysql from 'mysql'

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'wqa-settings',
  port: process.env.DB_PORT || '3306',
})

export { connection as sql }
