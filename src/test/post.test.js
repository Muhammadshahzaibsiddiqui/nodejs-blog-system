const request = require('supertest');
const { newToken } = require('../utils/auth');
const config = require("../config/config")
const app = config.appUrl

describe('testing posting service', () => {
    it('get all post', async () => {
        // Mock user data
        const user = {
            id: 1,
            username: 'my_name',
        };

        // Generate a JWT token
        const token = newToken(user);

        const res = await request(app)
            .get('/api/posts')
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toEqual(200)
        expect(res.body).toHaveProperty("message")
        expect(res.body).toHaveProperty("posts")
        expect(res.body.message).toEqual("Success")
    });

    it('get post by id', async () => {
        // Mock user data
        const user = {
            id: 1,
            username: 'my_name',
        };

        // Generate a JWT token
        const token = newToken(user);

        const res = await request(app)
            .get('/api/post/1')
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toEqual(200)
        expect(res.body).toHaveProperty("message")
        expect(res.body).toHaveProperty("post")
        expect(res.body.message).toEqual("Success")
    });

    it('create a new post', async () => {
        // Mock user data
        const user = {
            id: 1,
            username: 'my_name',
        };

        // Generate a JWT token
        const token = newToken(user);

        const res = await request(app)
            .post('/api/post/create')
            .send({ title: 'Post Title', content: 'Content' })
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toEqual(200)
    });

    it('update a post', async () => {
        // Mock user data
        const user = {
            id: 1,
            username: 'my_name',
        };

        // Generate a JWT token
        const token = newToken(user);

        const res = await request(app)
            .put('/api/post/1')
            .send({ title: 'Post Title Updated', content: 'Content' })
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toEqual(200)
    });

    it('delete a post', async () => {
        // Mock user data
        const user = {
            id: 1,
            username: 'my_name',
        };

        // Generate a JWT token
        const token = newToken(user);

        const res = await request(app)
            .delete('/api/post/1')
            .set('Authorization', `Bearer ${token}`);

        expect(res.status).toEqual(200)
    })
});