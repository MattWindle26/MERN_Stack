require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')
// Express app
const app = express();


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
        console.log("Connected to DB and Listening on port", process.env.PORT)
    })

})
.catch((error) => {
    console.log(error.log)
})


