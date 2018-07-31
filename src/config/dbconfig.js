import config from './config';
import Sequelize from 'sequelize';
import Umzug from 'umzug';
import path from 'path';

export default async function sequelize() {
  const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password, {
      host: config.db.host,
      dialect: 'postgres',
      operatorsAliases: false,

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },

    });

  function sleep(ms) {

    // eslint-disable-next-line no-undef
    return new Promise(function(resolve) {

      setTimeout(resolve, ms);
    });
  }

  while (true) {
    try {
      console.log(`Connecting to database at ${config.db.host}:3306`);
      await sequelize.authenticate();
      console.log('Database connection has been established successfully.');
      break;
    } catch (e) {
      console.error('Unable to connect to the database:', e);
      console.log('Retrying in 3s...');
      await sleep(3000);
    }
  }

  console.log('Running migrations...')
  const umzug = new Umzug({
    storage: "sequelize",

    storageOptions: {
      sequelize: sequelize
    },

    migrations: {
      params: [
        sequelize.getQueryInterface(),
        Sequelize
      ],
      path: path.join(__dirname, "../migrations")
    }
  });

  await umzug.up();

  console.log('Migrations executed successfully');

  return {
    sequelize,
  };
}
