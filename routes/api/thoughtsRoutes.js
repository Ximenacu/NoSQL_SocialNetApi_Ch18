const router = require('express').Router();
const {
    getThoughts, 
    getSingleThought, 
    createThought, 
    updateThought, 
    deleteThought, 
    addReaction, 
    deleteReaction } = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:ThoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/react
router.route('/:ThoughtId/react').put(addReaction);

// /api/thoughts/:thoughtId/delete/:reactionId
router.route('/:ThoughtId/delete/:reactionId').delete(deleteReaction);

module.exports = router;