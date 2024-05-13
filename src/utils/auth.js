const config = require("../config/config")
const jwt = require("jsonwebtoken")

const newToken = (user) => {

  const { id, username } = user

  return jwt.sign({
    id,
    username,
  }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  })
}

const verifyToken = (token) =>
  jwt.verify(token, config.secrets.jwt, (err, payload) => {
    if (err) return false
    return payload
  })

module.exports = {
  newToken,
  verifyToken,
}
