var express = require('express')
  , poweredBy = require('connect-powered-by')
  , util = require('util'),
  cons = require('consolidate'),
  swig = require('swig'),
  passport = require('passport');

var mongoose = require('mongoose');

module.exports = function() {
  // Warn of version mismatch between global "lcm" binary and local installation
  // of Locomotive.
  if (this.version !== require('locomotive').version) {
    console.warn(util.format('version mismatch between local (%s) and global (%s) Locomotive module', require('locomotive').version, this.version));
  }

  this.datastore(require('locomotive-mongoose'));

  swig.init({
    root: __dirname + '/../../app/views',
    allowErrors: true // allows errors to be thrown and caught by express instead of suppressed by Swig
  });
 
  this.engine('swig', cons.swig);
  this.set('view engine', 'swig');
  this.set('views', __dirname + '/../../app/views');

  this.use(poweredBy('Hipster Tech'));
  this.use(express.logger());
  this.use(express.favicon());
  this.use(express.cookieParser());
  this.use(express.session({
    secret: 'secret'
  }));
  this.use(express.static(__dirname + '/../../public'));
  this.use(express.bodyParser());
  this.use(express.methodOverride());
  this.use(passport.initialize());
  this.use(passport.session());
  this.use(this.router);
}
