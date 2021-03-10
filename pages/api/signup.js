import { sql } from './mysql'
import { scrypt, randomBytes } from 'crypto'
import { promisify } from 'util'

export default async (req, res) => {
  const { username, password, name } = req.body
  const asyncScript = promisify(scrypt)
  const salt = randomBytes(8).toString('hex')
  const buff = await asyncScript(password, salt, 64)

  const hashedPassword = `${buff.toString('hex')}.${salt}`

  sql.query(
    'INSERT into `user` set name=? ,username=? , password=? ',
    [name, username, hashedPassword],
    function (error, results, fields) {
      if (error) {
        console.log(error)
        res.status(500).send('Server error')
      }

      res.status(201).send(results)
    }
  )
}
