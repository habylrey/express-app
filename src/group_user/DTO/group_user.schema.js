import Joi from 'joi';
export const groupUserSchema = Joi.object({
	body: {
		name: Joi.string().min(1).max(30),
		role: Joi.string().min(1).max(30),
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
