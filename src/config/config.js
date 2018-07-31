// API Configs
import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

const config = Object.freeze({
  appName: env.appName || 'Trade Eth Admin',
  appNameShort: env.appNameShort || 'trade-eth',
  port: env.port || 3455,
  clientURL: env.clientURL || '*',
  accessToken: env.accessToken || '*',
  secret: env.secret || 'al1bl0_l3ZBr_hWh4',
  db: {
    user: env.DB_USER || 'tradeth',
    password: env.DB_PASSWORD || 'tradeth',
    database: env.DB_NAME || 'tradeth',
    host: env.DB_HOST || 'db',
  },
});

export default config;
