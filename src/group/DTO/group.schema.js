import Joi from 'joi';

const createBodySchema = Joi.object({
	name: Joi.string().required(),
	photo_file_id: Joi.number().optional(),
	id: Joi.number().integer().min(1),
});
const updateBodySchema = Joi.object({
	name: Joi.string().required(),
	photo_file_id: Joi.number().optional(),
});

export default (createBodySchema, updateBodySchema);
