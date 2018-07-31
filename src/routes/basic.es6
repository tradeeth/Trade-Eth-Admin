import { Router } from 'express';
import logger from '../functions/logger';


const api = Router();

api.get('/test', async function(req, res) {

  let ipOrigin = req.ip;
  if (!ipOrigin) {
    ipOrigin = 'unknown';
  }

  logger.info(ipOrigin);

  return res.json({
    success: true,
    msg: ipOrigin,
  });

});

export default () => api;