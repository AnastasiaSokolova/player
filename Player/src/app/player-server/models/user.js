var mongoose = require('mongoose'),
Schema = mongoose.Schema;



var UserSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    gender: String,
    email: String,
    playlist: [{ track_url: String, image_url: String}]

});


mongoose.model('User', UserSchema);
