// thanks to the sequelize docs
import fs from 'fs';
import path from 'path';
import {instance} from '../config/dbconfig';
import logger from '../functions/logger'

const db = {};
const basename = path.basename(__filename);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0)
      && (file !== basename)
      && (file.split('.').pop() === 'es6'
      );
  })
  .forEach(file => {
    logger.info(`Loading model file ${file}`);
    const model = instance['import'](path.join(__dirname, file));
    db[model.name] = model;
    logger.info(`Loaded model ${model.name}`);
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = instance;

export default db;