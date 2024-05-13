const { verifyToken } = require('../utils/auth')

let checkToken = (req, res, next) => {
    try {
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

    } catch (error) {
        res.status(401).send({
            status: 401,
            message: error.message
        });
    }
};

module.exports = {
    checkToken: checkToken,
};
