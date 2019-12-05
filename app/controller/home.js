const User = require('../model/user');
const userController = require('./user');

const homeController = {
	index: (req, res) => {
		if(req.user){
			return res.render('home', { user: req.user });
		};
		res.render('index', { message: req.flash('loginMessage')});
	},
	login: (req, res) => {
		if(req.user){
			res.redirect("/");
		};
		res.render('login', { message: req.flash('loginMessage')});
	},
	successfulLogin: (req, res) => {
		req.session.cookie.maxAge = 1000 * 60 * 30;
		res.redirect('/');
	},
	signup: (req, res) => {
		if(req.user){
			res.redirect("/");
		};
		res.render('signup', { message: req.flash('signupMessage')});
	},
	successfulSignup: (req, res) => {
		req.session.cookie.maxAge = 1000 * 60 * 30;
		res.redirect('/');
	},
	logout: (req, res) => {
		req.logout();
		res.redirect('/');
	}
};

module.exports = homeController;