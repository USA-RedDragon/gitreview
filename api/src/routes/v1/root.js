const controllers = require('../../controllers/v1/root');

module.exports = (app, version) => {
    app.get(`/api/${version}`, controllers.GETApi);
};
