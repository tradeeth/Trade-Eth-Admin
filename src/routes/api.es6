import { Router } from 'express'
import validate from 'express-validation';

import TokenController from '../controllers/token-controller'
import { validations } from '../controllers/token-controller'
import ConfigController from '../controllers/config-controller'

const api = Router();

api.get('/tokens', TokenController.list);
api.post('/tokens/add', validate(validations.add) ,TokenController.add);
api.delete('/tokens/:address',TokenController.delete);

api.get('/config/main', ConfigController.main);

api.get('/config/testnet', ConfigController.testnet);

export default () => api;