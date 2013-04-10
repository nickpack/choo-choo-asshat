var locomotive = require('locomotive'),
    user_model = require('../models/user'),
    passport = require('passport');

var AuthController = new locomotive.Controller();

AuthController.loginForm = function() {
  this.title = 'Log In';
  this.render();
};

AuthController.login = function() {
  passport.authenticate('local', {
    successRedirect: this.urlFor({ controller:'pages', action: 'main' }),
    failureRedirect: this.urlFor({ action: 'login' }) }
  )(this.__req, this.__res, this.__next);
};

AuthController.logout = function() {
  this.req.logOut();
  this.res.redirect('/');
};

AuthController.signup = function() {
  this.title = 'Sign Up';
  if (this.req.method === 'GET') {
    this.render();
  } else {
    var controller = this;
    user_model.registerUser(this.param('email'), this.param('password'), function(err, user) {
      if (err) {
        controller.error(err);
      } else {
        controller.redirect('/');
      }
    });
  }
};

module.exports = AuthController;