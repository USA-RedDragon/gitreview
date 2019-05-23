const controllers = require('../../controllers/v1/meta');

module.exports = (app, version) => {
    app.get(`/api/${version}/version`, controllers.GETApiVersion);
    app.get(`/api/${version}/ping`, controllers.GETApiPing);
};
