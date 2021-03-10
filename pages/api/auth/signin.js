import { sql } from './mysql'

export default (req, res) => {
  const { username, password } = req.body

  // sql.end()

  res.send('its from sigin api')
}
