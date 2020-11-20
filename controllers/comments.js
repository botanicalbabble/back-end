const express = require('express');
const router = express.Router();

const Plant = require('../models/plant');

//CREATE

//GET ALL PLANT COMMENTS FROM SINGLE PLANT
router.delete('/:plantId/:commentId', (req, res, next) => {
	let plantId = req.params.plantId;
	let commentId = req.params.commentId;
	console.log(commentId);
	Plant.findById(plantId)
		.populate('comments.name')
		// .then((plant) => plant)
		// .catch(next)
		.then((plant) => {
			plant.comments.id(commentId).remove();
			return plant.save();
		})
		.then(() => {
			res.sendStatus(204);
		})
		.catch(next);
});

//POST
router.post('/', (req, res, next) => {
	const commentData = req.body;
	const plantId = commentData.plantId;
	Plant.findById(plantId)
		.then((plant) => {
			plant.comments.push(commentData);
			return plant.save();
		})
		.then((plant) => res.status(201).json({ plant: plant }))
		.catch(next);
});

//DELETE
router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Plant.findOne({ 'comments._id': id })
		.then((plant) => {
			plant.comments.id(id).remove();
			return plant.save();
		})
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
