const router = require('express').Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(addThought)

// /api/thoughts/<userId>
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);
    

// /api/thoughts/reactions/<userId>
router.route('/reactions/:thoughtId')
    .post(addReaction);

// /api/thoughts/<thoughtId>/<reactionId>
router.route('/reactions/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;