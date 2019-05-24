const controllers = require('../../controllers/v1/users');

module.exports = (app, version) => {
    app.get(`/api/${version}/users/me`, controllers.GETApiUsersMe);
};
