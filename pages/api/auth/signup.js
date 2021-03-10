import { sql } from './mysql'
import { scrypt, randomBytes } from 'crypto'
import { promisify } from 'util'
import jwt from 'jsonwebtoken'
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
        return res.status(400).send('Bad request')
      }

      const userJwt = jwt.sign(
        {
          name,
          username,
        },
        process.env.SECRET || 'code-nicer'
      )

      res.status(201).send(userJwt)
    }
  )
}
