var AuthenticationController = require('../controllers/authentication'),  
    express = require('express'),
    passportService = require('../passport');

var authRoutes = express.Router();
    
// Auth Routes

authRoutes.post('/register', AuthenticationController.register);
authRoutes.post('/login', passportService.requireLogin, AuthenticationController.login);

authRoutes.get('/protected', passportService.requireAuth, function(req, res){
    res.send({ content: 'Success'});
});

module.exports = authRoutes;