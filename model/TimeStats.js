const mongoose = require("mongoose")
const {Schema} = mongoose


const timeStatsSchema = new Schema({
    timeAndHabit : {type: [Object], default: []},
    usedUpTime: {type: Object, default: {}},
    totalTimeAndHabit: {type: [Object], default: []},
    weekGoals : {type: [Object], default: []},
    dayGoals : {type: [Object], default: []}
})


mongoose.model('timeStats', timeStatsSchema)