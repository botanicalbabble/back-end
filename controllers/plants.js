const express = require('express');
const router = express.Router();

const Plant = require('../models/plant');
const Comment = require('../models/comment');
const { populate } = require('../models/plant');

//Get All Plants

router.get('/', (req, res, next) => {
	Plant.find()
		.populate('comments.name')
		.then((plants) => res.json(plants))
		.catch(next);
});

module.exports = router;
