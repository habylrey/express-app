import jwt from 'jsonwebtoken';
import models from '../common/DTO/models/model.service.js';
import login from '../auth/auth.login.js';

describe('login function', () => {
	let req, res, next;

	beforeEach(() => {
		req = {
			body: {
				login: 'testuser',
				password: 'testpassword',
			},
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
				name: 'Test User',
				role: 'admin',
			},
		};
		models.Auth.findOne.mockResolvedValue(mockUser);
		process.env.JWT_SECRET = 'secret';

		await login(req, res, next);

		expect(models.Auth.findOne).toHaveBeenCalledWith({
			where: { login: 'testuser', password: 'testpassword' },
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
				message: 'Hello, admin Test User',
			},
			{ token: expect.any(String) },
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
