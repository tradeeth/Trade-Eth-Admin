import morgan from 'morgan';
import bodyParser from 'body-parser';
import ExpressValidation from 'express-validation';
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

  if (process.env.NODE_ENV === 'production') {
    app.enable('trust proxy');
  }
}

export function configureErrorHandling(app) {
  // error handler
  app.use(function(err, req, res, next) {
    // specific for validation errors
    if (err instanceof ExpressValidation.ValidationError) {
      console.warn(err);
      return res.status(err.status).json(err);
    }

    console.error(err);
    // other type of errors, it *might* also be a Runtime Error
    // example handling
    if (process.env.NODE_ENV !== 'production') {
      return res.status(err.status || 500).json({
        error: {
          message: err.message,
          error: err.stack,
        },
      });
    } else {
      return res.sendStatus(err.status);
    }
  });
}
