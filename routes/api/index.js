const router = require('express').Router();
const pizzaRoutes = require('./user-routes');
const commentRoutes = require('./thought-routes');

router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
