var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');
var request = require('request');
var env = require('dotenv')
var githubAPI = require('./src/githubAPI');
var cors = require('cors')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
env.config();
app.use(cors());

var whitelist = ['https://lab9k.gent']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.get('/members',cors(corsOptions), githubAPI.getMembers);
app.get('/repos',cors(corsOptions), githubAPI.getRepos);

module.exports = app;
