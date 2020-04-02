const mongoose = require('mongoose')
const {Schema} = mongoose
const HabitSchema = require("../model/Habit")


const userSchema = new Schema({
    googleId : String,
    fullName: String,
    givenName: String,
    photo: String,
    email: String,
    habits: {type : [HabitSchema], default: []}
})


mongoose.model('users', userSchema)