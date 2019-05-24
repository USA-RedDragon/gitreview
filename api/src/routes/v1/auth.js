const controllers = require('../../controllers/v1/auth');
const passport = require('passport');

module.exports = (app, version) => {
    app.get(`/api/${version}/auth/github`, passport.authenticate('github'));
    app.get(
        `/api/${version}/auth/github/callback`,
        passport.authenticate('github', { failureRedirect: '/login' }),
        controllers.GetApiAuthGithubCallback);
    app.get(`/api/${version}/auth/logout`, controllers.GETApiAuthLogout);
};
