
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

	dashboard: function(req, res) {
		res.json(req.user);
	},

	facebook: function (req, res, next) {
	     passport.authenticate('facebook', { scope: ['email', 'user_about_me']},
	        function (err, user) {
	            req.logIn(user, function (err) {
	            if(err) {
	            	console.log(err);
	                res.redirect('/login');
	            } else {
	                req.session.user = user;
	                res.redirect('/dashboard');
	            }
	        });
	    })(req, res, next);
	  },

	'facebook/callback': function (req, res, next) {
	     passport.authenticate('facebook',
	        function (req, res) {
	            res.redirect('/auth/dashboard');
	        })(req, res, next);
	 },

}