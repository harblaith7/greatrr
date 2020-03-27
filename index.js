const express = require('express');

const app = express()
const PORT = process.env.PORT || 8080 

app.get('/about', (req, res) => {
    res.send("This is the about page")
})

// RAN IF IN PRODUCTION     
if (process.env.NODE_ENV === "production"){
    // Express will seeve up produciton assets
    app.use(express.static('client/build'))

    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Now running on port ${PORT}`)
})