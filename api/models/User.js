/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

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
};

