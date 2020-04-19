const router = require('express').Router()
const mongoose = require("mongoose")
const randomColor = require("randomcolor")
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

    // FINDING THE APPROPRIATE USER AND SAVING THEIR HABITS IN A VARIABLE
    const user = await User.findById(req.params.userId)
    const habits = user.habits
    
    // FILTERING THROUGH ALL USER'S HABITS AND FINDING THE ONE THAT MATCHES THE ID 
    // CHANGED THE COUNTER VALUE BY 1
    const updatedHabits = habits.map((habit) => {
        if(habit._id == req.params.habitId){
            habit.currentScore = habit.currentScore + 1;
            return habit
        } else {
            return habit
        }
    })

    // UPDATING THE ENTIRE HABIT ARRAY WITH UPDATED HABIT ARRAY
    const updatedSchema = await User.findByIdAndUpdate(
        {_id : req.params.userId},
        {habits : updatedHabits},
        (err, result) => {
         
        }
    )

    // SAVING THE RESULTS
    const results = await updatedSchema.save()

    res.send(results)
    
})


// ADDING ONE HABIT SUBDOCUMENT TO ARRAY //

router.post('/addhabit/:id', async (req, res) => {
    const {longTermGoal, threeMonthGoal, dailyHabit,  habitName, habitDuration, habitPriority, habitImage} = req.body;

    const newHabit = new Habits({
        longTermGoal,
        threeMonthGoal,
        dailyHabit,
        habitName,
        habitDuration,
        habitPriority,
        habitImage,
        color: randomColor()
    })

    const user = await User.findById(req.params.id)
    user.habits.push(newHabit);
    await user.save();
   
})

/////////////////////////////////////////////////
// ADDING MULTIPLE HABIT SUBDOCUMENTS TO ARRAY //
////////////////////////////////////////////////

router.post('/addhabits/:id', async (req, res) => {
    
    // MAPPING THROUGH EACH HABIT OBJECT AND TURNING IT INTO A HABIT SUBDOCUMENT
    const habitsToAdd = req.body.map(({longTermGoal, threeMonthGoal, dailyHabit,  habitName, habitDuration, habitPriority, habitImage}) => {
        return new Habits({
            longTermGoal,
            threeMonthGoal,
            dailyHabit,
            habitName,
            habitDuration,
            habitPriority,
            habitImage,
            color: randomColor()
        })
    })

    // FINDING THE APPROPRIATE USER AND SAVING THEIR HABITS IN A VARIABLE
    const user = await User.findById(req.params.id)
    const habits = user.habits

    // DEFINING THE NEW HABIT VARIABLE WHICH CONTAINS EVERYTHING INSIDE HABITSTOADD AND HABITS VARIABLE
    const updatedHabits = [...habits, ...habitsToAdd]

    // UPDATING THE ENTIRE HABIT ARRAY WITH UPDATED HABIT ARRAY
    const updatedSchema = await User.findByIdAndUpdate(
        {_id : req.params.id},
        {habits : updatedHabits},
        (err, result) => {
            console.log(result)
        }
    )

    // SAVING THE RESULTS
    const results = await updatedSchema.save()

    res.send(results)
      
})


//////////////////////////////////////////////////////
////////// UPDATING ONE HABIT UPON SAVE /////////////
/////////////////////////////////////////////////////

router.patch("/updateHabit/:userId/:habitId", async (req, res) => {

     // FINDING THE APPROPRIATE USER AND SAVING THEIR HABITS IN A VARIABLE
     const user = await User.findById(req.params.userId)
     const habits = user.habits
     
     // FILTERING THROUGH ALL USER'S HABITS AND FINDING THE ONE THAT MATCHES THE ID 
     // CHANGE THAT HABIT INTO THE ONE PASSED IN MY REQ.BODY
     const updatedHabits = habits.map((habit) => {
         if(habit._id == req.params.habitId){
             habit = req.body.updatedHabit;
             return habit
         } else {
             return habit
         }
     })

     
    // UPDATING THE ENTIRE HABIT ARRAY WITH UPDATED HABIT ARRAY
    const updatedSchema = await User.findByIdAndUpdate(
        {_id : req.params.userId},
        {habits : updatedHabits},
        (err, result) => {
            console.log(result)
        }
    )

    // SAVING THE RESULTS
    const results = await updatedSchema.save()

    res.send(results)


})

module.exports = router
