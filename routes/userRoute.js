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


module.exports = router