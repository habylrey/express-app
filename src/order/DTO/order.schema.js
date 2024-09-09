import Joi from 'joi';

const orderSchema = Joi.object({
	body: {
		product: Joi.string().min(1),
		amount: Joi.number().integer(),
		id: Joi.number().integer().min(1),
	},
	query: {
		id: Joi.alternatives().try(
			Joi.number().integer().positive(),
			Joi.string().valid('all')
		),
	},
});
export default orderSchema;
