import cookies from 'next-cookies'
import jwt from 'jsonwebtoken'

export default function Admin() {
  return <h1>This is Admin</h1>
}

Admin.getInitialProps = async (ctx) => {
  const allCookies = cookies(ctx)
  const targetURL = '/admin/signin'

  const { res } = ctx
  if (res) {
    if (!allCookies.jwt) {
      res.writeHead(307, { Location: targetURL })
      res.end()
    }

    jwt.verify(allCookies.jwt, 'code-nicer', function (err, decoded) {
      if (err) {
        res.writeHead(307, { Location: targetURL })
        res.end()
      }

      console.log(decoded)
    })
  } else {
    if (!allCookies.jwt) {
      window.location = targetURL
      await new Promise((resolve) => {})
    }

    jwt.verify(allCookies.jwt, 'code-nicer', async function (err, decoded) {
      if (err) {
        window.location = targetURL
        await new Promise((resolve) => {})
      }
    })
  }
}
