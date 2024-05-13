
const crudOperation = require('../cache/crud')
const { newToken } = require('../utils/auth')
const { verifyPasswordHash } = require('../utils/password')

async function login(data) {
    try {

        let allData = crudOperation.getOne(`user_${data.username}`)
        let token = "";

        if (allData) {

            let verifyPassword = verifyPasswordHash(data.password, allData.user.password);

            if(!verifyPassword){
                return "";
            }

            token = newToken(allData.user)
        }

        return token

    } catch (e) {
        console.error(e);
        return '';
    }
}

async function register(data) {

    let key = `user_${data.username}`;

    let user = {
        user: data,
    };

    return crudOperation.createAndUpdateOne(key, user)
}

module.exports = {
    login,
    register
}