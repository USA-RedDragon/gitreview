const cookies = require('cookie-parser');

module.exports = (app) => {
    app.use(cookies());
};
