import config from './config';
import Sequelize from 'sequelize';

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

  const migrator = sequelize.getMigrator({path: process.cwd() + "/migrations" }, true)
  migrator.migrate().success(function(){
    console.log("migrations complete");
  }).error(function(err){
    console.log("error migrating DB: ");
    throw err;
    process.exit();
  });

  return {
    sequelize,
  };
}
