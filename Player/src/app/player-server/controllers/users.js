var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.remove = function(req, res) {
    User.remove({},function(err, result) {
        return res.send(result);
    });
};


exports.import = function(req, res){
  User.create(
    {
      firstname: 'Jerald',
      lastname: 'Hardisty',
      username: 'jH',
      password: '1111',
      gender: 'male',
      email: '',
      playlist: {
        track_url: '',
        image_url: ''
      }
    },
    {
      firstname: 'Rosy',
      lastname: 'Doolin',
      username: 'rosy',
      password: '2222',
      gender: 'female',
      email: '',
      playlist: {
        track_url: '',
        image_url: ''
      }
    },
    function (err) {
     if (err) return console.log(err);
      return res.send(202);
  });
};

/*
exports.findAll = function(req, res){
  User.find({},function(err, results) {
      if(err) res.send(err);
      return res.send(results);
  });
};*/

exports.search = function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({'username': username, 'password': password},function(err, result) {
      if(err) res.send(err);
      return res.send(result);
  });
};




exports.setPlaylist = function(req, res) {
   console.log(req.body);
   var playlist = {"track_url": req.body.track_url, "image_url": req.body.image_url};
   User.findOneAndUpdate({'username': req.body.username}, {$push: {playlist: playlist}},
     {safe: true, upsert: true}, function(err, model) {
        console.log(err);
    });

   return res.send({status: 200, msg: 'Success!'});
};


exports.getPlaylist = function(req, res) {
  var username = req.body.username;
  User.findOne({'username': username},function(err, result) {
      if(err) res.send(err);
      console.log(result.playlist);
      return res.send(result.playlist);
  });
}


/*
exports.delete = function(req, res){
    var id = req.params.id;
    User.remove({'id': id},function(err, result) {
        if(err) res.send(err);
        return res.send({status: 200, msg: 'Success!'});
    });
};*/

/*
exports.update = function(req, res) {
    User.findOne({'id': req.params.id}, function(err, user) {
            if(err) res.send(err);
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.username = req.body.username;
            user.password = req.body.password;
            user.gender = req.body.gender;
            user.email = req.body.email;
            user.save(function(err) {
                if(err) res.send(err);
                res.send({ status: 200,  message: 'user updated!' });
            });

        });
};*/

exports.add = function(req, res) {
   var user = new User(req.body);
   user.save(function(err) {
      if(err) res.send(err);
      res.json(user);
    });
};

exports.findAll = function(req, res){
  User.find({},function(err, results) {
    if(err) res.send(err);
    return res.send(results);
  });
};


