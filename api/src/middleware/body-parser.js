const bodyParser = require('body-parser');
const bodyParserConfig = require('../config/middleware/body-parser');

module.exports = (app) => {
    app.use(bodyParser.json(bodyParserConfig.json));
};
