const mongoose = require('mongoose')
const {Schema} = mongoose


const userSchema = new Schema({
    googleId : String,
    fullName: String,
    givenName: String,
    photo: String,
    email: String
})


mongoose.model('users', userSchema)