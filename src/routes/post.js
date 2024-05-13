
const router = require("express").Router();
const postController = require('../controllers/postController')
const { validatePost } = require('../requests/postRequest');

/**
 * @swagger
 * /api/post/create:
 *   post:
 *     summary: Create a new post
 *     tags:
 *       - Posts
 *     description: Create a new post with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 description: The username of the new user.
 *               content:
 *                 type: string
 *                 description: The password of the new user.
 *     responses:
 *       200:
 *         description: Successfully Created.
 *       401:
 *         description: Bad request or un-auth. Could be due to missing fields, invalid data, or username already exists.
 */
router.post('/post/create', validatePost, postController.createPost);

/**
 * @swagger
 * /api/posts:
 *   get:
 *     security:
 *       - bearerAuth: [] 
 *     summary: Get all posts
 *     tags:
 *       - Posts
 *     responses:
 *       200:
 *         description: Posts.
 *       401:
 *         description: Unathorized.
 */
router.get('/posts', postController.getAllPost);

/**
 * @swagger
 * /api/post/{id}:
 *   get:
 *     security:
 *       - bearerAuth: [] 
 *     summary: Get specific post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The unique identifier of the post.
 *     responses:
 *       200:
 *         description: Post.
 *       401:
 *         description: Unathorized.
 */
router.get('/post/:id', postController.getPostById);

/**
 * @swagger
 * /api/post/{id}:
 *   put:
 *     security:
 *       - bearerAuth: [] 
 *     summary: Update specific post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 description: The username of the new user.
 *               content:
 *                 type: string
 *                 description: The password of the new user.
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The unique identifier of the post.
 *     responses:
 *       200:
 *         description: Successfully Updated.
 *       401:
 *         description: Unathorized.
 */
router.put('/post/:id', validatePost, postController.updatePost);

/**
 * @swagger
 * /api/post/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: [] 
 *     summary: Delete specific post
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: The unique identifier of the post.
 *     responses:
 *       200:
 *         description: Successfully Deleted.
 *       401:
 *         description: Unathorized.
 */
router.delete('/post/:id', postController.deletePost);

module.exports = router;
