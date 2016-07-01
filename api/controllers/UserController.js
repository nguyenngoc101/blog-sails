/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getSignup: function(req, res) {
		res.view('user/signup');
	},

	signup: function(req, res) {
		res.view();
	},
	login: function(req, res) {
		res.view();
	},
	logout: function(req, res) {
		res.view();
	}
};

