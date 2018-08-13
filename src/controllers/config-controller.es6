import db from '../models/index'

export default class ConfigController {

  static testnet(req, res) {
    res.status(200).send(require('../config/testnet.json'));
  }


  static main(req, res) {
    const mainConfig = require('../config/main.json');
    return db.Token.findAll()
      .then((results) => {
        mainConfig.tokens = results;
        return res.status(200).send(mainConfig);
      })
      .catch((err) => {
        return res.status(500).send({err: err.message});
      });
  }

}