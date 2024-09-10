import Joi from 'joi';

const createBodySchema = Joi.object({
	product: Joi.string().min(1),
	amount: Joi.number().integer(),
	id: Joi.number().integer().min(1),
});
const updateBodySchema = Joi.object({
	product: Joi.string().min(1),
	amount: Joi.number().integer(),
});

export default (createBodySchema, updateBodySchema);
