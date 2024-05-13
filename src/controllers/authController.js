const authService = require('../services/authService')
const AuthDTO = require('../DTOs/authDTO')

async function login(req, res) {
    try {

        const authDTO = new AuthDTO(req)
        const data = authDTO.getLoginData();

        const token = await authService.login(data);

        if (token) {
            return res
                .set({ authorization: token })
                .status(200)
                .send({ message: "logged in." });
        }

        return res.status(401).send({ message: "Invalid Credentials!" });

    } catch (error) {
        throw error
    }
}

async function register(req, res) {
    try {

        const authDTO = new AuthDTO(req)
        const data = await authDTO.getRegisterData();

        const user = await authService.register(data);

        if (user) {
            return res
                .status(200)
                .send({ message: "Successfully Registered." });
        }

        return res.status(401).send({ message: "Something went wrong!" });

    } catch (error) {
        throw error
    }
}

module.exports = {
    login,
    register
}