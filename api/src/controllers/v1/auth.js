module.exports.GetApiAuthGithubCallback = (req, res) => {
    res.redirect('/');
};

module.exports.GETApiAuthLogout = async (req, res) => {
    req.logout();
    res.redirect('/');
};
