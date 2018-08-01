import { Router } from 'express'
import TokenController from '../controllers/token-controller'

const api = Router();

api.get('/tokens', TokenController.list);

export default () => api;