const Plant = require('../models/plant');

const Comment = require('../models/comment');

const seedData = require('./seedData-1.json');

Plant.deleteMany({})
	.then((comment) =>
		seedData.map((plant) => ({ ...plant, comment: comment._id }))
	)
	.then((plants) => Plant.insertMany(plants))
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
