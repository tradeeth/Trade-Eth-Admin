import db from '../models/index'
import mainConfig from '../config/main.json';

export default class ConfigController {

  static testnet(req, res) {
    res.status(200).send(require('../config/testnet.json'));
  }


  static main(req, res) {

    return db.Token.findAll()
      .then((results) => {
        mainConfig.tokens += results;
        return res.status(200).send(mainConfig);
      })
      .catch((err) => {
        return res.status(500).send({err: err.message});
      });
  }

}