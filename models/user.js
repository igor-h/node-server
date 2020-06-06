var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: [true, 'The name is required'] },
    email: { type: String, required: [true, 'The email is required'] },
    password: { type: String, required: [true, 'The password is required'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROLE' },
});

module.exports = mongoose.model('User', userSchema);