var mongoose = require('mongoose');

module.exports = {
    connect: function (connString) {
        let connectWithRetry = function () {
            mongoose.connection.on('connected', function () {
                console.log('Mongoose default connection open to ' + connString);
            });
            // If the connection throws an error
            mongoose.connection.on('error', function (err) {
                console.log('Mongoose default connection error: ' + err);
            });
            // When the connection is disconnected
            mongoose.connection.on('disconnected', function () {
                console.log('Mongoose default connection disconnected');
            });
            // If the Node process ends, close the Mongoose connection 
            process.setMaxListeners(1);
            process.on('SIGINT', function () {
                mongoose.connection.close(function () {
                    console.log('Mongoose default connection disconnected through app termination');
                    process.exit(0);
                });
            });
            mongoose.connect(connString, function (err) {
                if (err) {
                    console.error(`Mongoose failed to connect to mongo (${connString}) on startup - retrying in 5 sec`);
                    setTimeout(connectWithRetry, 5000);
                }
            });
        };
        connectWithRetry();
    }
}