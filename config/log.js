var winston = require('winston');

var customLogger = new winston.Logger({
    transports: [
        new(winston.transports.File)({
            level: 'debug',
            filename: 'my_log_file.log'
        }),
    ],
});

module.exports.log = {
    colors: false,  // To get clean logs without prefixes or color codings
    custom: customLogger
};
