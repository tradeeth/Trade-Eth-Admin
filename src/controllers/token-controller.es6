import Joi from 'joi';
import db from '../models';
import config from '../config/config';

export const validations = {
  add: {
    body: {
      name: Joi.string().required(),
      fullName: Joi.string().required(),
      addr: Joi.string().required(),
      decimals: Joi.number().required(),
      url: Joi.string(),
      description: Joi.string(),
    },
  },
};

export default class TokenController {

  static list(req, res) {
    return db.Token.findAll()
      .then((results) => {
        return res.status(200).send(results);
      })
      .catch((err) => {
        return res.status(500).send({err: err.message});
      })
  }

  static add(req, res) {
    if (!req.body.secret || req.body.secret !== config.secret) {
      const err = { errors: [{ messages: ["Wrong secret"]}]};
      return res.status(400).send(err);
    }

    const addr = req.body.addr;
    const name = req.body.name;
    const fullName = req.body.fullName;
    const decimals = req.body.decimals;
    const url = req.body.url;
    const description = req.body.description;

    // Create or update existing token
    return db.Token.findOne({ where: { addr } })
      .then(function(obj) {
        const values = {
          name,
          fullName,
          decimals,
          url,
          description
        };

        return obj ? obj.update(values) : db.Token.create(Object.assign(values, { addr }));
      })
      .then(() => res.sendStatus(200));
  }

  static delete(req, res) {
    if (!req.headers.secret || req.headers.secret !== config.secret) {
      const err = { errors: [{ messages: ["Wrong secret"]}]};
      return res.status(400).send(err);
    }

    const addr = req.params.address;

    // Remove existing token
    return db.Token.findOne({ where: { addr } })
      .then(obj => {
        if (!obj) {
          return res.status(404).send('Not Found');
        }
        return obj
          .destroy()
          .then(() => res.status(200).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(500).send(error));
  }

}