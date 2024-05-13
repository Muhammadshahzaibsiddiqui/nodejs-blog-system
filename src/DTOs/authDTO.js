const ShortUniqueId = require('short-unique-id');
const { generatePasswordHash } = require('../utils/password');
const { randomUUID } = new ShortUniqueId();

class AuthDTO {
    constructor(req) {
        this.id = randomUUID();
        this.username = req.body.username;
        this.password = req.body.password;
        this.createdAt = new Date();
    }

    getLoginData() {
        return {
            username: this.username,
            password: this.password,
        }
    }

    async getRegisterData() {
        return {
            id: this.id,
            username: this.username,
            password: await this.encryptPassword(),
            createdAt: this.createdAt,
        }
    }

    encryptPassword(){
        return generatePasswordHash(this.password);
    }
}

module.exports = AuthDTO;