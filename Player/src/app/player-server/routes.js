
module.exports = function(app){
    var users = require('./controllers/users');
    //var validate  = require('express-validation');
    //var validation = require('./validation/player-form.js');
    app.get('/login', users.findByParams);
    app.get('/show', users.findAll);
    app.post('/login', users.add);
    /*app.put('/employees/:id', validate(validation), employees.update);
    app.delete('/employees/:id', employees.delete);*/
    app.get('/import', users.import);
    app.get('/remove', users.remove);
}

