module.exports = (() => {

  'use strict';

  const Command = require('cmnd').Command;

  class ServerCommand extends Command {

    constructor() {

      super('debug');

    }

    help() {

      return {
        description: 'Starts your Nodal Server cluster using node inspector'
      };

    }

    run(args, flags, vflags, callback) {

      let spawn = require('cross-spawn-async');
      let child = spawn('npm',  ['install', 'node-inspector', '-g'], {cwd: process.cwd(), stdio: 'inherit'});
      let child = spawn('npm',  ['debug'], {stdio: 'inherit'});

      process.on('exit', function() {
        child && child.kill();
      });

    }

  }

  return ServerCommand;

})();
