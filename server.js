const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
var RateLimit = require('express-rate-limit');
const cors = require('cors')
const helmet = require('helmet')
const sanitize = require('sanitize')
const routes = require('./server/routes');
var compression = require('compression')
const validator = require('express-validator');
const statsController = require('./server/controllers/stats');

const r = require('dotenv').config();


// compress all responses
//should be removed on production version
app.use(cors());

app.use(compression());


app.use(sanitize.middleware)
/** /security */
app.use(helmet.hidePoweredBy())
app.use(helmet.dnsPrefetchControl())
//app.use(helmet.noSniff())
app.use(helmet.xssFilter())
app.use(helmet.frameguard())
app.use(helmet.hsts())
/** security/ */
//app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)

var api_limiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  statusCode: 500,
  message: `error 500, something went wrong on our end
  (if this appears again, come back later)`,
});

// API file for interacting with MongoDB

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


//app.use(validator());


var fs = require('fs');


/* app.use(async (req, res, next) => {
  const url = req.url;
  const shouldNotInclude = ['assets', '.js', '.css', '.jpg', '.png'];
  let skip = false;
  shouldNotInclude.forEach(c => {
    skip = skip || url.includes(c);
  });

  if (!skip) {
    await statsController.registerStat(req);
  }

  next();
});
 */

// Angular DIST output folder
app.use(express.static(path.join(__dirname, './dist'), {
  maxAge: 86400000
}));


app.use('/', routes);


app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});




//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);


const server = http.createServer(app);


server.listen(port, () => console.log(`Running on localhost:${port}`));

module.exports = server;
