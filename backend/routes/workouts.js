const express = require("express");

const router = express.Router();

// This is to get all workouts
router.get('/', (req, res) => {
    res.json({msg: "get all workouts"})
})

// This is to get single workout
router.get('/:id', (req, res) => {
    res.json({mes: "GET a single workout"})
})

// POST a new workout
router.post('/', (req, res) => {
    res.json({msg: "POST a new workout"})
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({msg: "DELETE a workout"})
})
// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({msg: "UPDATE a workout"})
})

module.exports = router
