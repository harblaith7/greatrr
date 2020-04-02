const router = require('express').Router()
const mongoose = require("mongoose")
const User = mongoose.model("users")
const Habits = mongoose.model("habits")


router.get('/userhabits/:id', (req, res) => {
    User.findById({
        _id : req.params.id
    })
    .then(response => {
        res.send(response.habits)
    })
})

router.patch('/addhabit/:id', async (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    const response = await User.findByIdAndUpdate(req.params.id, {
        habits : [...req.body.habits, req.body.habit]
    })
    console.log(response)
    res.send(response)
})

// Flimsy code
router.post('/addhabit/:id', async (req, res) => {
    const {habit, description, duration, linkedTo, color} = req.body;

    const newHabit = new Habits({
        habit,
        description,
        duration,
        linkedTo,
        color
    })

    console.log("I am running")
    const response = await User.findByIdAndUpdate(req.params.id, {
        habits : newHabit    
    })
    res.send(response)
    console.log(response)
})


module.exports = router
