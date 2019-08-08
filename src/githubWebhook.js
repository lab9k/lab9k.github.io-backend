var request = require('request');

module.exports= {
    getMembers()
    {

        var options = {
            uri: 'https://api.github.com/orgs/lab9k/members',
            headers: {
              'User-agent':'henrivdb',
              Authorization: 'token '+process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
          }
        };

        request.get(options, function (error, response, body) {
          console.log('error:', error); // Print the error if one occurred
          console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          console.log('body:', body); // Print the HTML for the Google homepage.
        });
    },
};