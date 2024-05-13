
const router = require("express").Router();
const postController = require('../controllers/authController')
const { validateLogin, validateRegister } = require('../requests/authRequest');

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - User
 *     description: Registers a new user with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the new user.
 *                 default: test_username
 *               password:
 *                 type: string
 *                 description: The password of the new user.
 *                 default: password
 *     responses:
 *       200:
 *         description: User created successfully.
 *       401:
 *         description: Bad request. Could be due to missing fields, invalid data, or username already exists.
 */
router.post('/register', validateRegister, postController.register);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login a user
 *     tags:
 *       - User
 *     description: Login a user with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the new user.
 *                 default: test_username
 *               password:
 *                 type: string
 *                 description: The password of the new user.
 *                 default: password
 *     responses:
 *       200:
 *         description: logged in.
 *       401:
 *         description: Bad request. Could be due to missing fields, invalid data, or username already exists.
 */
router.post('/login', validateLogin, postController.login);

module.exports = router;