import Joi from 'joi';

export const userSchema = Joi.object({
	body: {
		name: Joi.string().min(1).max(30),
		age: Joi.number().integer().min(1),
		id: Joi.number().integer().min(1),
	},
	query: Joi.object({
		id: Joi.alternatives().try(Joi.number().integer().positive()),
	}),
});
export const groupSchema = Joi.object({
	body: {
		name: Joi.string().min(1).max(30),
		id: Joi.number().integer().min(1),
	},
	query: {
		id: Joi.alternatives().try(
			Joi.number().integer().positive(),
			Joi.string().valid('all')
		),
	},
});
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
export const orderSchema = Joi.object({
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

export const AuthSchema = Joi.object({
	password: Joi.string().min(1).required(),
	login: Joi.string().min(1).required(),
});
