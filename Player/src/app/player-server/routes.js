
module.exports = function(app){
    var users = require('./controllers/users');
    //var validate  = require('express-validation');
    //var validation = require('./validation/player-form.js');
    app.get('/users', users.findAll);
    app.get('/users/:id', users.findOne);

    app.post('/login', users.add);
    app.post('/users', users.search);
    app.post('/setplaylist', users.setPlaylist);
    app.post('/getplaylist', users.getPlaylist);
    app.post('/deleteTrack', users.deleteTrack);
    app.put('/users/:id', users.update);
    /*app.put('/employees/:id', validate(validation), employees.update);*/
    //app.delete('/deleteTrack/:id', users.deleteTrack);
    app.get('/import', users.import);
    app.get('/remove', users.remove);
}

