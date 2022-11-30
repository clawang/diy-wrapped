var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var path = require('path');

/** USE THIS FILE FOR LOCAL TESTING. */

var client_id = '2fe65fcbcf884c1c9fafda1d069bb45c'; // Your client id
var client_secret = '892e45da9ad74f70b37eddaac40defc7'; // Your secret
var redirect_uri;
if(process.env.PORT) {
  redirect_uri = 'https://diy-wrapped.herokuapp.com/'; // Your redirect uri
} else {
  redirect_uri = 'http://localhost:3000/';
}

var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

const PORT = process.env.PORT || 8888;

app.use(cors())
   .use(cookieParser());

app.get('/content', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/', (req, res) => {
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  var token;

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {

      // use the access token to access the Spotify Web API
      token = body.access_token;

      res.redirect(redirect_uri + 'content#' +
          querystring.stringify({
            access_token: body.access_token,
            refresh_token: body.refresh_token
          }));
    }
  });
});

//console.log('Listening on 8888');
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
