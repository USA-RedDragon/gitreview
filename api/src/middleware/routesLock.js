const anymatch = require('anymatch');
const routesWhitelist = require('../config/middleware/routesWhitelist');

module.exports = (app) => {
    app.use((req, res, next) => {
        if (req.isAuthenticated() || anymatch(routesWhitelist, req.path)) {
            return next();
        }
        res.status(403).send();
    });
};
