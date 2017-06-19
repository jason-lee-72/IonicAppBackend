var AuthenticationController = require('./controllers/authentication'),  
    express = require('express')
    
module.exports = function(app){
    var apiRoutes = express.Router(),
        authRouter = require('./routes/auth'),
        heroesRouter = require('./routes/heroes');
 
    apiRoutes.use('/auth', authRouter);
    apiRoutes.use('/heroes', heroesRouter);
 
    // Set up routes
    app.use('/api', apiRoutes);
}
