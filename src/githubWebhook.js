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
          res.status(200).send(body);
          console.log('error:', error); // Print the error if one occurred
        });

    },
};