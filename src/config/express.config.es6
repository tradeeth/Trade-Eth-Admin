import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config';

export default function configureExpress(app) {
  // log to console
  app.use(morgan('dev'));
  // get our request parameters as json
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', config.clientURL);
    res.setHeader('Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type, token, email, password, key'
    );
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
      });
    });
  }

  if (process.env.NODE_ENV === 'production') {
    app.enable('trust proxy');
  }
}
