module.exports = function(sequelize, DataTypes) {
    const users = sequelize.define('users', {
        admin: DataTypes.BOOLEAN,
        githubId: {
            type: DataTypes.INTEGER,
            unique: { msg: 'Github ID already in use.' },
        },
        email: {
            type: DataTypes.STRING,
            unique: { msg: 'Email address already in use.' },
        },
        login: {
            type: DataTypes.STRING,
            unique: { msg: 'Github login already in use.' },
        },
        name: DataTypes.STRING,
        avatarUrl: DataTypes.STRING,
    }, {
        indexes: [{ unique: true, fields: ['email', 'githubId', 'login'] }],
    });

    return users;
};
