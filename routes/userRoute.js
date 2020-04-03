const router = require('express').Router()
const mongoose = require("mongoose")
const User = mongoose.model("users")
const Habits = mongoose.model("habits")

// GETTING ALL USER HABITS //
router.get('/userhabits/:id', (req, res) => {
    User.findById({
        _id : req.params.id
    })
    .then(response => {
        res.send(response.habits)
    })
})

router.patch('/updateScore/:userId/:habitId', async (req, res) => {

    const user = await User.findById(req.params.userId)
    const habits = user.habits
    
    
    const updatedHabits = habits.map((habit) => {
        console.log('running')
        console.log(habit._id)
        console.log(req.params.habitId)
        if(habit._id == req.params.habitId){
            console.log('Running')
            habit.currentScore = habit.currentScore + 1;
            return habit
        } else {
            console.log('am i running?')
            return habit
        }
    })
    

    const updatedSchema = await User.findByIdAndUpdate(
        {_id : req.params.userId},
        {habits : updatedHabits},
        (err, result) => {
            console.log(result)
        }
    )

    const results = await updatedSchema.save()

    res.send(results)

    /*
    const {currentScore} = req.body
    let habit;
    const user = await User.findById(req.params.userId, (err, user) => {
        let habit = user.habits.find(habit => habit.habit === req.params.habitTitle)
        habit.currentScore = 5
    })
    await user.save()
    res.send(user)
    */
    
})
//5e8650488d3aa90a18549b89
//5e8763cf8de899044ceadd4c

// ADDING HABIT SUBDOCUMENT TO ARRAY //

router.post('/addhabit/:id', async (req, res) => {
    const {habit, description, duration, linkedTo, color} = req.body;

    const newHabit = new Habits({
        habit,
        description,
        duration,
        linkedTo,
        color
    })

    const user = await User.findById(req.params.id)
    user.habits.push(newHabit);
    await user.save();

    res.send(user)
    
})


module.exports = router
