const morgan = require('morgan');
const morganConfig = require('../config/middleware/morgan');

module.exports = (app) => {
    app.use(morgan(morganConfig));
};
