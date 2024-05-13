const dotenv = require("dotenv")
dotenv.config()

if (process.env.NODE_ENV === "production") {
  module.exports = {
    port: process.env.PORT || 80,
    appUrl: process.env.APP_URL,
    cache: {},
    secrets: {
      jwt: process.env.JWT_KEY,
      jwtExp: process.env.JWTEXP,
    }
  }
} else {
  module.exports = {
    port: process.env.PORT || 4000,
    appUrl: process.env.APP_URL,
    cache: {},
    secrets: {
      jwt: process.env.JWT_KEY,
      jwtExp: process.env.JWTEXP,
    }
  }
}
