const router = require('express').Router()
const mongoose = require("mongoose")
const User = mongoose.model("users")


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


module.exports = router
