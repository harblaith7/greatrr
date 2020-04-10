const mongoose = require('mongoose')
const {Schema} = mongoose


const habitsSchema = new Schema({
    longTermGoal: String,
    threeMonthGoal: String,
    habitName: String,
    habitImage: String,
    dailyHabit: String,
    habitDuration: Number,
    habitPriority: Number,
    color: String,
    currentScore: {type: Number, default: 0},
    weeksPoints: {type : Number, default : 0},
    weeksHours: {type : Number, default : 0},
    totalPoints: {type : Number, default : 0},
    totalHours: {type : Number, default : 0},
    weekStatus: {type: [Boolean], default : [false, false, false, false, false, false, false]},
})


mongoose.model('habits', habitsSchema)

/*

habit: "Workout",
description: "1 hour of weight training",
duration: 6,
currentScore: 6,
linkedTo: "Acheiving body that is 200lbs and 10% body fat",
weeksPoints: 23,
weeksHours: 5,
totalPoints: 312,
totalHours: 74,
weekStatus : [false, false, false, false, false, false, false],
color: "pink"

*/