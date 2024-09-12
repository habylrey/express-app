import validateRequest from '../src/common/validate.middleware.js';
import models from '../src/common/DTO/models/model.service.js';
import Joi from 'joi';
import { group } from '../__faker__/validate.faker.js';

describe('validateRequest', () => {
	let req, res, next;

	beforeEach(() => {
		req = {
			body: { ...group },
			query: { id: group.id },
		};
		res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};
		next = jest.fn();
		models.Group.findOne = jest.fn();
	});
	const schema = {
		body: Joi.object({
			name: Joi.string().required(),
			photo_file_id: Joi.number().required(),
		}),
		query: Joi.object({
			id: Joi.number().required(),
		}),
	};

	it('should call error if validation is not passes', async () => {
		const middleware = validateRequest(schema);
		await middleware(req, res, next);
		expect(res.status).toHaveBeenCalled();
		expect(res.json).toHaveBeenCalled();
	});
});
