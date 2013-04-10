var locomotive = require('locomotive');

var PagesController = new locomotive.Controller();

PagesController.main = function() {
  this.title = 'Ohai'
  this.user = this.req.user
  this.render();
}

module.exports = PagesController;
