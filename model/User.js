const mongoose = require('mongoose')
const {Schema} = mongoose
const HabitSchema = require("../model/Habit")
const TimeStats = require("../model/TimeStats")


const userSchema = new Schema({
    googleId : String,
    fullName: String,
    givenName: String,
    photo: String,
    email: String,
    habits: {type : [HabitSchema], default: []},
    timeStats: {type: TimeStats, default: {
        timeAndHabit: [],
        usedUpTime: {0: "default"},
        totalTimeAndHabit: [],
        weekGoals: [],
        dayGoals: []
    }}
})


mongoose.model('users', userSchema)