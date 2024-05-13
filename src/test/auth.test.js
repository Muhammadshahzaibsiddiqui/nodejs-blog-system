const request = require('supertest');
const config = require("../config/config")
const app = config.appUrl

describe('Register functionality', () => {
    it('should successfully Register with valid credentials', async () => {
        const response = await request(app)
            .post('/api/register') // Replace with your login endpoint
            .send({ username: 'my_name', password: '123' })
            .expect(200)

        // Assert successful response
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe("Successfully Registered.");
    });

    it('should return 401 for validation', async () => {
        const response = await request(app)
            .post('/api/register')
            .send({ password: '123' })
            .expect(401);

        // Assert error message
        expect(response.body).toHaveProperty('error');
    });
});

describe('Login functionality', () => {
    it('should successfully login with valid credentials', async () => {
        const response = await request(app)
            .post('/api/login') 
            .send({ username: 'my_name', password: '123' })
            .expect(200);

        // Assert successful response
        expect(response.header).toHaveProperty('authorization');
    });

    it('should return 400 for invalid credentials', async () => {
      const response = await request(app)
      .post('/api/login')
       .send({ username: 'my_name', password: 'incorrect' })
      .expect(401);
      
      // Assert error message
      expect(response.body).toHaveProperty('message'); 
      expect(response.body.message).toBe("Invalid Credentials!");
    });
});