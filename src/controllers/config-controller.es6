import db from '../models/index'
import mainConfig from '../config/main.json';

export default class ConfigController {

  static testnet(req, res) {
    res.status(200).send(require('../config/testnet.json'));
  }


  static main(req, res) {

    return db.Token.findAll({ raw: true })
      .then((results) => {
        const eth = {"addr":"0x0000000000000000000000000000000000000000","name":"ETH","decimals":18};
        let tokens = results.slice();
        tokens.unshift(eth);
        mainConfig.tokens = tokens;
        return res.status(200).send(mainConfig);
      })
      .catch((err) => {
        return res.status(500).send({err: err.message});
      });
  }

}