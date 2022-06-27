const Workout = require('../models/workoutModel')

 // GET ALL WORKOUTS

 const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
 }

 // GET A SINGLE WORKOUT

 const getWorkout = async (req, res) => {
    const { id }  = req.params

    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({ error: "No such workout"})
    }

    res.status(200).json(workout)
 }

 // CREATE A WORKOUT

const creatWorkout = async (req, res) => {
    const {title, load, reps} = req.body 
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

 // DELETE A WORKOUT

 // UPDATE A WORKOUT

 module.exports = {
     getWorkouts,
     getWorkout,
     creatWorkout
 }