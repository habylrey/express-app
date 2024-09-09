import Joi from 'joi';
export const idSchema = Joi.object({
	id: Joi.alternatives().try(
		Joi.number().integer().positive(),
		Joi.string().valid('all')
	),
});
