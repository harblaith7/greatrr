const express = require('express');
const passport = require('passport');
const cookieSession = require("cookie-session");
const keys = require('./config/keys')
const mongoose = require('mongoose')
require("./model/User")
require("./services/passport")
const userRoutes = require('./routes/userRoute')

mongoose.connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
 })


const app = express()


app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize())
app.use(passport.session())


// ROUTES 
require("./routes/authRoute")(app)

app.get("/trust/the/process", (req, res) => {
    res.send('Bitchass')
})

app.use("/api", userRoutes)

// RAN IF IN PRODUCTION     
if (process.env.NODE_ENV === "production"){
    // Express will seeve up produciton assets
    app.use(express.static('client/build'))

    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 8080 

app.listen(PORT, () => {
    console.log(`Now running on port ${PORT}`)
})