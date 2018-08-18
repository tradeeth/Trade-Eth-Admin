import express from 'express';
import {} from 'express-async-errors';

import config from './config/config';
import logger from './functions/logger';
import api from './routes/api';
import application from './routes/app';
import configureSequelize from './config/dbconfig';
import configureExpress, { configureErrorHandling } from './config/express.config';

// const passport = require('passport');

const app = express();

app.get('/', function(req, res) {
  res.send('This is not the server you are looking for.');
});

configureExpress(app);

app.use('/api', api());

configureErrorHandling(app);

app.use('/', application());

configureSequelize().then(() => {

  const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
// Start the server
  app.listen(config.port);

  logger.info(
    `${config.appName} serving on ${config.hostname}:${config.port}`
  );
  logger.info(`Server start ${date}`);
});
