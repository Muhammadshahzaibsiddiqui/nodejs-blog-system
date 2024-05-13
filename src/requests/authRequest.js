const crudOperation = require('../cache/crud')

// Validation logic function
async function validateLoginRequest(req) {

    const { body } = req;

    if (!body.username) {
        return 'Username Required';
    }

    if (!body.password) {
        return 'Password Required';
    }

    return null; // Validation passed
}

async function validateRegisterRequest(req) {

    const { body } = req;

    if (!body.username) {
        return 'Username Required';
    }

    if (!body.password) {
        return 'Password Required';
    }

    if (crudOperation.getOne(`user_${body.username}`)) {
        return 'User Alread Exist';
    }

    return null; // Validation passed
}

// Middleware for validation
async function validateLogin(req, res, next) {
    const validationError = await validateLoginRequest(req);
    if (validationError) {
        return res.status(401).json({ error: validationError });
    }
    next();
}

async function validateRegister(req, res, next) {
    const validationError = await validateRegisterRequest(req);
    if (validationError) {
        return res.status(401).json({ error: validationError });
    }
    next();
}


module.exports = {
    validateLogin,
    validateRegister
};