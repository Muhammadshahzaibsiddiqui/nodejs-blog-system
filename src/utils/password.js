const bcrypt = require('bcryptjs');

const generatePasswordHash = (password) => {
  const rounds = 10
  return bcrypt.hash(password, rounds)
}

const verifyPasswordHash = (password, secret) => {
  return bcrypt.compareSync(password, secret)
}

module.exports = {
  generatePasswordHash,
  verifyPasswordHash
}
