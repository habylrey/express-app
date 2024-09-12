import models from '../src/common/DTO/models/model.service.js';
import login from '../src/auth/auth.login.js';
import { auth } from '../__faker__/auth.faker.js';

describe('login function', () => {
	let req, res, next;

	beforeEach(() => {
		req = {
			body: { ...auth },
		};
		res = {
			setHeader: jest.fn(),
			cookie: jest.fn(),
			json: jest.fn(),
		};
		next = jest.fn();
		models.Auth.findOne = jest.fn();
	});

	it('should return a token and user message on successful login', async () => {
		const mockUser = {
			id: 1,
			User: {
				role: 'admin',
				name: 'Test User',
			},
		};
		models.Auth.findOne.mockResolvedValue(mockUser);
		process.env.JWT_SECRET = 'secret';

		await login(req, res, next);

		expect(models.Auth.findOne).toHaveBeenCalledWith({
			where: {
				login: auth.login,
				password: auth.password,
			},
			include: {
				model: models.User,
				attributes: ['role', 'name'],
			},
		});
		expect(res.setHeader).toHaveBeenCalledWith(
			'Authorization',
			expect.any(String)
		);
		expect(res.cookie).toHaveBeenCalledWith('token', expect.any(String), {
			httpOnly: true,
		});
		expect(res.json).toHaveBeenCalledWith([
			{
				message: expect.stringContaining(`Hello`),
			},
			{
				token: res.setHeader.mock.calls[0][1].split(' ')[1],
			},
		]);
	});

	it('should call next with an error if user is not found', async () => {
		models.Auth.findOne.mockResolvedValue(null);

		await login(req, res, next);

		expect(next).toHaveBeenCalledWith(
			new Error('Invalid login or password')
		);
	});
});
