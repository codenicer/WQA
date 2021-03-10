import { sql } from './mysql'
import { scrypt, randomBytes } from 'crypto'
import { promisify } from 'util'
import jwt from 'jsonwebtoken'

const asyncScript = promisify(scrypt)

export default async (req, res) => {
  const { username, password } = req.body

  sql.query(
    'SELECT * FROM `user` where username= ?',
    [username],
    async function (error, results, fields) {
      if (error) {
        return res.status(400).send('Bad Request')
      }

      if (results.length < 1) {
        return res.status(404).send('Not Found')
      }

      const [hashedPassword, salt] = results[0].password.split('.')
      const hashedProvided = await asyncScript(password, salt, 64)

      console.log(hashedProvided)
      if (hashedPassword === hashedProvided.toString('hex')) {
        const userJwt = jwt.sign(
          {
            name: results[0].name,
            username,
          },
          process.env.SECRET || 'code-nicer'
        )
        res.status(200).send(userJwt)
      } else {
        return res.status(400).send('Bad Request')
      }
    }
  )
}
