var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');
var request = require('request');
var env = require('dotenv')
var githubWebhook = require('./src/githubWebhook');
var cors = require('cors')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
env.config();
app.use(cors());

var corsOptions = {
  origin: 'https://lab9k.gent',
  optionsSuccessStatus: 200
}

app.get('/members',cors(corsOptions), githubWebhook.getMembers);
app.get('/repos',cors(corsOptions), githubWebhook.getRepos);

module.exports = app;
