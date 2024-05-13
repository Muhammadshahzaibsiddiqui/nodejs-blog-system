const NodeCache = require( "node-cache" );
const config = require('../config/config');

const cache = new NodeCache(config.cache);

module.exports = cache;