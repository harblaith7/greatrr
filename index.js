const express = require('express');

const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send("Can this shit please work, it works but hopefully it works so far but hopefully it works with the react app")
})

app.get('/about', (req, res) => {
    res.send("This is the about page")
})

app.listen(PORT, () => {
    console.log(`Now running on port ${PORT}`)
})