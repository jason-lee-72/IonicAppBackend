let express  = require('express');
let app      = express();
let database = require('./database');
let databaseConfig = require('./config/database');
let logger = require('morgan');
let bodyParser = require('body-parser');
let cors = require('cors');
let router = require('./app/routes');

app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080");

database.connect(databaseConfig.url);

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());
 
router(app);
