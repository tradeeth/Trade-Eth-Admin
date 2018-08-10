import db from '../models';
import logger from '../functions/logger'

export default class TokenController {

  static list(req, res) {
    console.log(db);
    return db.Token.findAll()
      .then((results) => {
        return res.status(200).send(results);
      })
      .catch((err) => {
        return res.status(500).send({err: err.message});
      })
  }

}