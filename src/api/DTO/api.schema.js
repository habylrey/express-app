import Joi from 'joi';

const apiSchema = Joi.object({
	query: {
		q: Joi.string().required(),
		appid: Joi.string().required(),
		units: Joi.string().valid('metric'),
	},
});
export default apiSchema;
