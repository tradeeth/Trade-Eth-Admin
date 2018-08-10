import { Router } from 'express'
import TokenController from '../controllers/token-controller'
import ConfigController from '../controllers/config-controller'

const api = Router();

api.get('/tokens', TokenController.list);

api.get('/config/main', ConfigController.main);

api.get('/config/testnet', ConfigController.testnet);

export default () => api;