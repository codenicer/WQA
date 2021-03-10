import mysql from 'mysql'
// import {}

export default (req, res) => {
  const { username, password } = req.body
  res.send('its from sigin api')
}
