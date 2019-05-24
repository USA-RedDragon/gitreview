const session = require('express-session');
const sessionConfig = require('../config/middleware/express-session');

module.exports = (app) => {
    app.use(session(sessionConfig));
};
