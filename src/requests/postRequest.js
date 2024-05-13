// Validation logic function
async function validatePostRequest(req) {

    const { body } = req;

    if (!body.title) {
        return 'Post title Required';
    }

    if (!body.content) {
        return 'Post Content Required';
    }

    return null; // Validation passed
}

// Middleware for validation
async function validatePost(req, res, next) {
    const validationError = await validatePostRequest(req);
    if (validationError) {
        return res.status(401).json({ error: validationError });
    }
    next();
}

module.exports = {
    validatePost,
};