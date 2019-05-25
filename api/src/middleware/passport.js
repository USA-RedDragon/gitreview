const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const githubConfig = require('../config').auth.github;
const models = require('../db/models');

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function(user, done) {
        done(null, user.get());
    });

    passport.deserializeUser(function(user, done) {
        models.users.findByPk(user.id).then((user) => {
            if (user) {
                done(null, user.get());
            } else {
                done(new Error('No User Found'), null);
            }
        }).catch((err) => {
            done(err, null);
        });
    });

    passport.use(new GitHubStrategy({
        clientID: githubConfig.clientId,
        clientSecret: githubConfig.clientSecret,
        callbackURL: githubConfig.callbackUrl,
        scope: ['user:email'],
    },
    (accessToken, refreshToken, profile, cb) => {
        let primaryEmail = undefined;
        profile.emails.forEach((email) => {
            if (email.primary) {
                primaryEmail = email.value;
                return;
            }
        });
        models.users.findOrCreate({
            where: { githubId: profile.id },
            defaults: {
                admin: false,
                email: primaryEmail,
                login: profile._json.login,
                name: profile._json.name,
                avatarUrl: profile._json.avatar_url,
            },
        }).then(([user, created]) => {
            if (created && user.id == 1) {
                // First user, make them an admin
                return user.update({ admin: true }).then((user) => {
                    return cb(null, user);
                });
            }
            return cb(null, user);
        }).catch((err) => {
            return cb(err, null);
        });
    }));
};
