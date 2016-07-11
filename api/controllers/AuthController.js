
var passport = require('passport');
var uuid = require('node-uuid');

module.exports = {

	getSignup: function(req, res) {
		res.view('user/signup');
	},

	signup: function(req, res) {
		var user = {};
		user.firstName = req.body.firstName;
		user.lastName = req.body.lastName;
		user.email = req.body.email;
		user.password = req.body.password;
		User.create(user, function(err, user) {
			if (err) {
				return res.badRequest();
			} 

			if (req.wantsJSON) {
				return res.json(user);
			} 

			req.session.user = user;
	        res.redirect('/dashboard');
		});
	},
	login: function(req, res) {
		var user = {};

		res.view();
	},
	logout: function(req, res) {
		req.logout();
		delete req.session;
		res.redirect('/login');
	},

	dashboard: function(req, res) {
		res.json(req.session.user);
	},

	facebook: function (req, res, next) {
	     passport.authenticate('facebook', { scope: ['email', 'user_about_me']},
	        function (err, user) {
	            req.logIn(user, function (err) {
	            if(err) {
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