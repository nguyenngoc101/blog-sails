/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');
var uuid = require('node-uuid');

module.exports = {
	getSignup: function(req, res) {
		res.view('user/signup');
	},

	signup: function(req, res) {
		
	},
	login: function(req, res) {
		res.view();
	},
	logout: function(req, res) {
		res.redirect('/login');
	},

	'facebook': function (req, res, next) {
	     passport.authenticate('facebook', { scope: ['email', 'user_about_me']},
	        function (err, user) {
	            req.logIn(user, function (err) {
	            if(err) {
	                req.session.flash = 'There was an error';
	                res.redirect('user/login');
	            } else {
	                req.session.user = user;
	                res.redirect('/user/dashboard');
	            }
	        });
	    })(req, res, next);
	  },

	  'facebook/callback': function (req, res, next) {
	     passport.authenticate('facebook',
	        function (req, res) {
	            res.redirect('/user/dashboard');
	        })(req, res, next);
	  },

	  dashboard: function(req, res) {
	  	res.json(req.user);
	  }

};