module.exports.GETApiUsersMe = (req, res) => {
    res.json(req.user);
};

module.exports.PUTApiUsersMe = (req, res) => {
    req.db.users.findByPk(req.user.id).then((user) => {
        user.update(req.body).then(() => {
            res.send().status(201);
        });
    }).catch((err) => {
        console.log(err);
        res.json({ message: 'User not found' }).status(401);
    });
};

module.exports.GETApiUsers = (req, res) => {
    req.db.users.findAll().then((users) => {
        res.json(users);
    }).catch((err) => {
        console.log(err);
        res.json({ message: 'Query error' }).status(401);
    });
};
