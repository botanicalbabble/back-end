const express = require('express');
const router = express.Router();

const Plant = require('../models/plant');
const Comment = require('../models/comment');
const { populate } = require('../models/plant');

//GET All Plants

router.get('/', (req, res, next) => {
	Plant.find()
		.populate('comments.name')
		.then((plants) => res.json(plants))
		.catch(next);
});

//GET Single Plant

router.get('/:id', (req, res, next) => {
	let id = req.params.id;
	Plant.findById(id)
		.populate('comments.name')
		.then((plants) => res.json(plants))
		.catch(next);
});

//POST Single
router.put('/:id', (req, res, next) => {
	let id = req.params.id;
	let plantUpdateData = req.body;
	Plant.findOneAndUpdate({ _id: id }, plantUpdateData, { new: true })
		.then((plant) => res.json(plant))
		.catch(next);
});

//POST Create a new plant

router.post('/', (req, res, next) => {
	let plantUpdateData = req.body;
	Plant.create(plantUpdateData)
		.then((plant) => res.status(201).json(plant))
		.catch(next);
});

//DELETE

router.delete('/:id', (req, res, next) => {
	const id = req.params.id;
	Plant.findOneAndDelete({ _id: id })
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
