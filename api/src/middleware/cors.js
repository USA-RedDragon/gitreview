const cors = require('cors');
const corsConfig = require('../config/middleware/cors');

module.exports = (app) => {
    app.use(cors(corsConfig));
};
