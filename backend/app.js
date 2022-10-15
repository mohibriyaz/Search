

const createError = require ('http-errors');
const express = require ('express');
const cors = require ('cors');
const logger = require ('morgan');
const cookieParser = require ('cookie-parser');
const apiRouter = require ('./routes/api');
const seedRouter = require ('./routes/seed');
const config = require ('./config');

const  connectMongo = require ('./config/mongo');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * API routes // <-- All API routes are defined here
 */


app.use(cors({
  origin:'http://localhost:3000',
}));

app.get('/', (req, res, next)=>{res.json({heartBeat: true})});
app.use('/seed', seedRouter);
app.use('/api', apiRouter);


/**
 * Middleware to catch 404 and forward to error handler
 */

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  const error ={
    heartBeat: false,
    status: err.status || 500,
    message: err.message,
    error: config.env === 'development' ? err : {}
  }
  res.status(err.status || 500).json(error);
});


connectMongo(() => {
  app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
  })
});