const { verifyToken } = require('../utils/auth')
const exclusion = require("../utils/whitelist");


let securityMiddleware = (req, res, next) => {
    try {

        if (!exclusion.inWhitelist(req.originalUrl)) {

            let token = req.headers["x-access-token"] || req.headers["authorization"];

            token = token && token.startsWith("Bearer ") ? (token = token.slice(7, token.length)) : token;

            let verify = verifyToken(token)

            if (verify) {
                req.authUser = verify;
                next();
            } else {
                res.status(401).send({
                    status: 401,
                    message: "You are not authorized!",
                });
            };
        }

        next();

    } catch (error) {
        res.status(401).send({
            status: 401,
            message: error.message
        });
    }
};

module.exports = securityMiddleware;
