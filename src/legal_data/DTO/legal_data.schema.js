export const legalDataSchema = Joi.object({
	body: {
		name: Joi.string().min(1).max(30),
		tax_number: Joi.string().min(1),
		id: Joi.number().integer().min(1),
	},
	query: {
		id: Joi.alternatives().try(
			Joi.number().integer().positive(),
			Joi.string().valid('all')
		),
	},
});
