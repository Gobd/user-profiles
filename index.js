var express = require('express')
  , bodyParser = require('body-parser')
  , session = require('express-session')
  , cors = require('cors')
  , config = require('./config.js')
  , user = require('./controllers/userCtrl.js')
  , profile = require('./controllers/profileCtrl.js')
  , port = 8080
  , corsOptions = {
        origin: 'http://localhost:' + port
      }
  , app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
    secret: config.sessionSecret
  , resave: false
  , saveUninitialized: false
}));

app.use(express.static(__dirname + '/public'));

app.post('/api/login', user.login);
app.get('/api/login', profile.profileFind);
app.get('/api/friendlist', profile.allFriends);
app.post('/addfriend', user.addFriend);

app.listen(port, function(){
  console.log('Listening on port ' + port);
});
