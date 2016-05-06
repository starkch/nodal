module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');

  class Todo extends Nodal.Model {}

  Todo.setDatabase(Nodal.require('db/main.js'));
  Todo.setSchema(Nodal.my.Schema.models.Todo);

  Todo.joinsTo(User,{multiple: true});

  return Todo;

})();
