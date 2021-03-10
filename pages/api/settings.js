import { sql } from './mysql'

export default (req, res) => {
  sql.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error
    console.log('The solution is: ', results[0].solution)

    res.status(200).json({ name: 'The solution is: ' + results[0].solution })
  })
}
