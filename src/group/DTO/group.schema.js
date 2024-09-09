import Joi from 'joi';

const groupSchema = Joi.object({
	body: {
		name: Joi.string().min(1).max(30),
		photo_file_id: Joi.number().integer().min(1),
		id: Joi.number().integer().min(1),
	},
	query: Joi.object({
		id: Joi.alternatives().try(Joi.number().integer().positive()),
	}),
});
export default groupSchema;
