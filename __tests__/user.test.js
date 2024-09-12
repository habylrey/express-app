import models from '../src/common/DTO/models/model.service.js';
import userService from '../src/user/user.service.js';
import { NotFoundException } from '../src/server/server.exceptions.js';
import { users } from '../__faker__/user.faker.js';

describe('userService', () => {
	let mockUser;

	beforeEach(() => {
		mockUser = users;

		models.User.findAll = jest.fn();
		models.User.findByPk = jest.fn();
		models.User.create = jest.fn();
		models.User.update = jest.fn();
		models.User.destroy = jest.fn();
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('getAllUsers', () => {
		it('should return all users', async () => {
			models.User.findAll.mockResolvedValue([mockUser]);
			const users = await userService.getAllUsers();
			expect(users).toEqual([mockUser]);
		});
	});

	describe('getUserById', () => {
		it('should return a user by id', async () => {
			models.User.findByPk.mockResolvedValue(mockUser);
			const user = await userService.getUserById(1);
			expect(user).toEqual(mockUser);
		});

		it('should throw NotFoundException if user not found', async () => {
			models.User.findByPk.mockResolvedValue(null);
			await expect(userService.getUserById(2)).rejects.toThrow(
				NotFoundException
			);
		});
	});

	describe('createUser', () => {
		it('should create a new user', async () => {
			models.User.create.mockResolvedValue(mockUser);
			const newUser = await userService.createUser({
				name: 'Test User',
				age: 30,
			});
			expect(newUser).toEqual(mockUser);
		});
	});

	describe('updateUser', () => {
		it('should update an existing user', async () => {
			const updatedUser = { ...mockUser, name: 'Updated User' };
			models.User.update.mockResolvedValue([1, [updatedUser]]);
			const result = await userService.updateUser(1, {
				name: 'Updated User',
			});
			expect(result).toEqual(updatedUser);
		});

		it('should throw NotFoundException if user not found', async () => {
			models.User.update.mockResolvedValue([0, []]);
			await expect(
				userService.updateUser(2, { name: 'Updated User' })
			).rejects.toThrow(NotFoundException);
		});
	});

	describe('deleteUser', () => {
		it('should delete an existing user', async () => {
			models.User.destroy.mockResolvedValue(1);
			const result = await userService.deleteUser(1);
			expect(result).toBe(1);
		});

		it('should throw NotFoundException if user not found', async () => {
			models.User.destroy.mockResolvedValue(0);
			await expect(userService.deleteUser(2)).rejects.toThrow(
				NotFoundException
			);
		});
	});
});
