import express from 'express';
import config from './config/config';
import logger from './functions/logger';
import api from './routes/basic';
import sequelize from './config/dbconfig';
import configureExpress from './config/express.config';

// const passport = require('passport');

const app = express();

app.get('/', function(req, res) {
  res.send('This is not the server you are looking for.');
});

configureExpress(app);

app.use('/api', api);

sequelize();

const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
// Start the server
app.listen(config.port);

logger.info(
  `${config.appName} serving on ${config.hostname}:${config.port}`
);
logger.info(`Server start ${date}`);
