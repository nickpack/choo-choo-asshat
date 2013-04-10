var mongoose = require('mongoose'),
    models = require('../../app/models');

module.exports = function() {
  switch (this.env) {
    case 'development':
      mongoose.connect('mongodb://localhost/dev');
      break;
    case 'production':
      mongoose.connect('mongodb://mongodb.example.com/prod');
      break;
  }

  mongoose.model('User', models.user.UserSchema);
}