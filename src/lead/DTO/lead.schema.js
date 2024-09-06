import Joi from 'joi';
export const leadSchema = Joi.object({
	body: {
		name: Joi.string().min(1).max(30),
		email: Joi.string().email(),
		phone: Joi.string().min(1).max(30),
		status: Joi.string().min(1).max(30),
		id: Joi.number().integer().min(1),
	},
	query: {
		id: Joi.alternatives().try(
			Joi.number().integer().positive(),
			Joi.string().valid('all')
		),
	},
});
