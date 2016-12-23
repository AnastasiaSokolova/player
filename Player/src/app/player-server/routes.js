
module.exports = function(app){
    var users = require('./controllers/users');
    //var validate  = require('express-validation');
    //var validation = require('./validation/player-form.js');
    app.get('/users', users.findAll);

    app.post('/login', users.add);
    app.post('/users', users.search);
    /*app.put('/employees/:id', validate(validation), employees.update);
    app.delete('/employees/:id', employees.delete);*/
    app.get('/import', users.import);
    app.get('/remove', users.remove);
}

