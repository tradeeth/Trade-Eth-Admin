// API Configs
import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

const config = Object.freeze({
  appName: env.appName || 'Trade Eth Admin',
  appNameShort: env.appNameShort || 'trade-eth',
  port: env.port || 3000,
  hostname: env.hostname || '127.0.0.1',
  clientURL: env.clientURL || '*',
  secret: env.secret || 'TradeETHpassword',
  db: {
    user: env.DB_USER || 'tradeth',
    password: env.DB_PASSWORD || 'tradeth',
    database: env.DB_NAME || 'tradeth',
    host: env.DB_HOST || 'db',
  },
});

export default config;
