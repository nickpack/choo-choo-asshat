var mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    index: { unique: true }
  },
  hash: String
});

userSchema.statics.registerUser = function(email, password, callback) {
  var Model = this;

  bcrypt.hash(password, 8, function(error, hash) {
    var user = new Model({ 
      email: email, 
      hash: hash 
    });
    user.save(function(error) {
      callback(error, user);
    });
  });
};

userSchema.methods.validPassword = function(password, callback) {
  bcrypt.compare(password, this.hash, function(error, match) {
    callback(!error && match);
  });
};

module.exports = mongoose.connection.model('User', userSchema);