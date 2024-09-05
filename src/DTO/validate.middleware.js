import Joi from 'joi';

const validateRequest = (schema) => {
	return (req, res, next) => {
		const { body, query } = req;
		const { error: bodyError } = schema.body
			? schema.body.validate(body, { abortEarly: false })
			: {};
		const { error: queryError } = schema.query
			? schema.query.validate(query, { abortEarly: false })
			: {};

		const errors = [];

		if (bodyError) {
			errors.push(
				...bodyError.details.map((detail) => ({
					type: 'body',
					message: detail.message,
				}))
			);
		}

		if (queryError) {
			errors.push(
				...queryError.details.map((detail) => ({
					type: 'query',
					message: detail.message,
				}))
			);
		}

		if (errors.length > 0) {
			return res.status(400).json({ errors });
		}

		next();
	};
};

export default validateRequest;
