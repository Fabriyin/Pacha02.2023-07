const {Schema, model} = require('mongoose')

const UserSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isOnline: {
        type: Boolean,
        default: false
    },
})

UserSchema.method('toJson', function() {
    const {__v, _id, password, ...object} = this.toObject();
    object.uid = _id;
    return object
})

module.exports = model('User', UserSchema)