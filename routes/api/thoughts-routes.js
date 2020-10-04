const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughts-controller');

// Set up the GET all thoughts at /api/thoughts
router
    .route('/')
    .get(getAllThoughts);

// Set up GET one at /api/thoughts/:id
router
    .route('/:thoughtId')
    .get(getThoughtById);

// Set up POST to add thought at /api/thoughts/:userId
router
    .route('/:userId').post(addThought);

// Set up PUT and DELETE to update and remove a thought at /api/thouguhts/:userId/:thoughId
router
    .route('/:userId/:thoughtId')
    .put(updateThought)
    .delete(removeThought);

// Set up POST and DELETE to create and remove reactions at /api/thoughts/:thoughtId/reactions
router
    .route('/:userId/:thoughtId')
    .post(addReaction);
    

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);


module.exports = router;