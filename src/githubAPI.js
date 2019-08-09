var request = require('request');

module.exports= {
    getMembers(req,res)
    {

        var options = {
            uri: 'https://api.github.com/orgs/lab9k/members',
            headers: {
              'User-agent':'henrivdb',
              Authorization: 'token '+ process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
          }
        };

        request.get(options, function (error, response, body) {
          if(error != null)
          {
            console.log('error:', error);
          }  
          res.status(200).send(body);
        });

    },
    getRepos(req,res)
    {

        var options = {
            uri: 'https://api.github.com/orgs/lab9k/repos?per_page=200',
            headers: {
              'User-agent':'henrivdb',
              Authorization: 'token '+ process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
          }
        };

        request.get(options, function (error, response, body) {
          if(error != null)
          {
            console.log('error:', error);
          }
          var sortedBody = JSON.parse(body).sort(function(a, b) {
            return parseFloat(b.pushed_at) - parseFloat(a.pushed_at);
          });
          res.status(200).send(sortedBody);
        });

    },
};