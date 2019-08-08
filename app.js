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

/*
const PORT = process.env.PORT || 2900;
app.listen(PORT, () => {
  var options = {
    uri: 'https://api.github.com/orgs/lab9k/repos',
    headers: {
      'User-agent':'henrivdb',
      Authorization: 'token '+ process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  }
};

request.get(options, function (error, response, body) {
  var sortedBody = JSON.parse(body).sort(function(a, b) {
    return parseFloat(b.pushed_at) - parseFloat(a.pushed_at);
  });
  console.log(sortedBody);
});
});
*/

module.exports = app;
