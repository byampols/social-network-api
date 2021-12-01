const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
    .get(getAllThoughts)

// /api/thoughts/<userId>
router.route('/:userId')
    .get(getThoughtById)
    .post(addThought)
    .put(updateThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').put(addReaction).delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;