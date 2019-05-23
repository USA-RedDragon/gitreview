const db = require('../db/models');

module.exports = (app) => {
    app.use((req, res, next) => {
        req.db = db;
        return next();
    });
};
