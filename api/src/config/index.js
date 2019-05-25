module.exports = {
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USERNAME || 'username',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_DATABASE || 'database',
        dialect: process.env.DB_DIALECT || 'mariadb',
    },
    http: {
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'http://localhost:' + (process.env.PORT || 3000),
    },
    auth: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID || '0000',
            clientSecret: process.env.GITHUB_CLIENT_SECRET || '0000',
            callbackUrl:
                process.env.GITHUB_CALLBACK_URL ||
                (process.env.HOST || 'http://localhost:' + (process.env.PORT || 3000)
                    + '/api/v1/auth/github/callback'),
        },
    },
    signingSecret: process.env.SECRET || 'secret',
};
