
const cache = require('./cache');

const createAndUpdateOne = (key, data) => {
  return cache.set(key, data);
}

const getOne = (key) => {
  return cache.get(key);
}

module.exports = crudOperation = {
  createAndUpdateOne,
  getOne
};
