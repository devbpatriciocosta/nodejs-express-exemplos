import { sign, verify } from 'jsonwebtoken'
import { NoEmitOnErrorsPlugin } from 'webpack'

const AUTH_SECRET = 'secret'

export const generateAccessToken = (data) => sign(data, 'secret')

export const verifyAccessToken = (req, res, next) => {
  try {
    const { authorization } = req.cookies
    if (!authorization) throw new Error('authorization_not_found')

    const user = verify(authorization, AUTH_SECRET)
    req.user = user
    next()

  } catch (err) {
    res.status(401).send()
  }
}