import mysql from 'mysql'

export default (req, res) => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'wqa-settings',
    port: process.env.DB_PORT || '3306',
  })

  connection.query(
    'SELECT 1 + 1 AS solution',
    function (error, results, fields) {
      if (error) throw error
      console.log('The solution is: ', results[0].solution)
      connection.end()
      res.status(200).json({ name: 'The solution is: ' + results[0].solution })
    }
  )
}
