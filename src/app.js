const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const logger = require('./middlewares/logger');
const securityMiddleware = require("./middlewares/auth");

const swaggerSpec = require("./utils/swagger");
const swaggerUi = require("swagger-ui-express");

const app = express()
const PORT = process.env.PORT || 4000;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan("dev"))

// Logger Middle
app.use(logger);

// Swagger page
app.use("/api/docs/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Security Middle
app.use(securityMiddleware);

app.get("/api/status", (req, res) => {
  res.status(200).send({ status: 200 });
})

const api = {
  auth: require("./routes/auth"),
  post: require("./routes/post"),
};

app.use("/api", api.auth);
app.use("/api", api.post);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`REST API on http://localhost:${PORT}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
start()
