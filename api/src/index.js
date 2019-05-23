const app = require('./app');
const config = require('./config');

const { name } = require('../package.json');

app.listen(config.http.port, () => console.log(`${name} listening on port ${config.http.port}!`));
