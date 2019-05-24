module.exports.GETApiUsersMe = (req, res) => {
    res.json(req.user);
};
