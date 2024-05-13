// middleware/logger.js
const logger = (req, res, next) => {

    if (process.env.ENABLE_LOGS) {

        const date = new Date().toISOString();

        // Log incoming request
        console.log(`[${date}] ${req.method} ${req.originalUrl}`);
    }

    next();
};

module.exports = logger;
