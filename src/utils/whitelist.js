var whitelist = [
    "/api/status",
    "/api/login",
    "/api/register",
    "/api/docs/",
];

let inWhitelist = (originalUrl) => {
    return whitelist.includes(originalUrl);
};

module.exports = {
    inWhitelist: inWhitelist,
};
