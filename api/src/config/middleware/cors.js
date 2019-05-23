const config = require('..');

const corsWhitelist = [
    config.http.host,
];

module.exports = {
    origin: function(origin, callback) {
        if (!origin || corsWhitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};
