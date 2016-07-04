/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
  	provider: 'string',
  	facebookId: 'string',
  	uuid: 'string',
  	username: 'string',
  	firstName: 'string',
  	lastName: 'string',
  	email: 'string',
  	password: 'string',
  	createdAt: 'date',
  	modifiedAt: 'date',
  	avatar: 'string'
  }

  beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    }
};

