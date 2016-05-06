module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateTweets extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016050423441961;
    }

    up() {

      return [
        this.createTable("tweets", [{"name":"user_id","type":"int"},{"name":"tweets","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("tweets")
      ];

    }

  }

  return CreateTweets;

})();
