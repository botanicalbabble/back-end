const mongoose = require('../db/connection');

const commentSchema = require('./comment');

const PlantSchema = new mongoose.Schema(
	{
		id: Number,
		common_name: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
		},
		scientific_name: String,
		year: Number,
		bibliography: String,
		author: String,
		status: String,
		rank: String,
		family_common_name: String,
		genus_id: Number,
		image_url: String,
		genus: String,
		family: String,
		links: {
			self: String,
			plant: String,
			genus: String,
		},
		comments: [commentSchema],
	},

	{
		timestamps: true,
	}
);

const Plant = mongoose.model('Plant', PlantSchema);

module.exports = Plant;
