
const crudOperation = require('../cache/crud')

async function get(username) {
    try {
        let _data = crudOperation.getOne(`user_${username}`)
        return (_data && _data.hasOwnProperty("posts")) ? _data.posts : {}
    } catch (error) {
        throw error
    }
}

async function getOne(id, username) {
    try {
        let _data = crudOperation.getOne(`user_${username}`)
        return (_data && _data.hasOwnProperty("posts")) && _data.posts[id] ? _data.posts[id] : {}
    } catch (error) {
        throw error
    }
}

async function create(username, data) {
    try {
        let key = `user_${username}`;
        let _data = crudOperation.getOne(key)

        if (!_data) {
            return false
        }

        let user = {
            ..._data,
            posts: { ..._data.posts, [data.id]: data }
        };

        return crudOperation.createAndUpdateOne(key, user)
    } catch (error) {
        throw error
    }
}

async function update(id, username, data) {
    try {
        let key = `user_${username}`;
        let _data = crudOperation.getOne(key)

        if (!_data || !_data.hasOwnProperty("posts") || !_data.posts[id]) {
            return false
        }

        let user = {
            ..._data,
            posts: { ..._data.posts, [id]: data }
        };

        return crudOperation.createAndUpdateOne(key, user)

    } catch (error) {
        throw error
    }
}

async function dalete(id, username) {
    try {
        let key = `user_${username}`;
        let _data = crudOperation.getOne(key)

        if (!_data || !_data.hasOwnProperty("posts") || !_data.posts[id]) {
            return false
        }

        delete _data.posts[id];

        return crudOperation.createAndUpdateOne(key, _data)

    } catch (error) {
        throw error
    }
}

module.exports = {
    get,
    getOne,
    create,
    update,
    dalete
}