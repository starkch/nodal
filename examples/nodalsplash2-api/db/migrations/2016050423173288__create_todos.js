module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateTodos extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016050423173288;
    }

    up() {

      return [
        this.createTable("todos", [{"name":"user_id","type":"int"},{"name":"todo_list","type":"json"}])
      ];

    }

    down() {

      return [
        this.dropTable("todos")
      ];

    }

  }

  return CreateTodos;

})();
