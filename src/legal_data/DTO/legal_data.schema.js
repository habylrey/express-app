import Joi from 'joi';

const createBodySchema = Joi.object({
	name: Joi.string().min(1).max(30),
	tax_number: Joi.string().min(1),
	id: Joi.number().integer().min(1),
});
const updateBodySchema = Joi.object({
	name: Joi.string().min(1).max(30),
	tax_number: Joi.string().min(1),
});

export default (createBodySchema, updateBodySchema);
