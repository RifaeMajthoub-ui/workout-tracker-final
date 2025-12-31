const express = require('express');
const { 
    getWorkouts, 
    getWorkout, 
    createWorkout, 
    deleteWorkout 
} = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.get('/', getWorkouts);
router.get('/:id', getWorkout);
router.post('/', createWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;