const mongoose = require('../db/connection');

const commentSchema = new mongoose.Schema(
	{
		comment_name: {
			type: String,
			required: true,
		},
		comment_body: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
module.exports = commentSchema;
