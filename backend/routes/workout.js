const express = require("express");
const { creatWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');
const router = express.Router();

// This is to get all workouts
router.get('/', getWorkouts)

// This is to get single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', creatWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)
// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router
