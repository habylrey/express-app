import Joi from 'joi';

const createBodySchema = Joi.object({
	name: Joi.string().min(1).max(30),
	email: Joi.string().email(),
	phone: Joi.string().min(1).max(30),
	status: Joi.string().min(1).max(30),
	id: Joi.number().integer().min(1),
});
const updateBodySchema = Joi.object({
	name: Joi.string().min(1).max(30),
	email: Joi.string().email(),
	phone: Joi.string().min(1).max(30),
	status: Joi.string().min(1).max(30),
});

export default (createBodySchema, updateBodySchema);
