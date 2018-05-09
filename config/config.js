const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'rest-node'
    },
    port: process.env.PORT || 8081,
    db: 'mongodb://localhost/rest-node-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'rest-node'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/rest-node-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'rest-node'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/rest-node-production'
  }
};

module.exports = config[env];
