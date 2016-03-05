var users = [
    {
        name: 'Brian',
        password: 'a',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {

  login: function(req, res, next){
    var found = false;
    users.forEach(function(obj){
      if(req.body.name === obj.name && req.body.password === obj.password) {
        found = true;
        req.session.currentUser = obj;
        res.json({userFound: true});
      }
    });
    if (!found) {res.json({userFound: false});}
  },

  addFriend: function(req, res, next) {
    var name = req.body.name;
    users.forEach(function(obj){
      if (obj.name === req.session.currentUser.name) {
        obj.friends.push(name);
        req.session.currentUser.friends.push(name);
      }
    });
    res.status(200).send();
  }

};
