const config = require('..');

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('../../db/models');

const sessionStore = new SequelizeStore({
    db: db.sequelize,
    table: 'sessions',
});

module.exports = {
    cookie: {
        httpOnly: false,
    },
    resave: false,
    saveUninitialized: false,
    secret: config.signingSecret,
    store: sessionStore,
};
