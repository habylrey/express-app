import { Router } from 'express';
import UserService from './user.service.js';
import validateRequest from '../common/validate.middleware.js';
import { idSchema } from '../common/validate.schemas.js';
import userSchema from './DTO/user.schema.js';

function createUserRouter() {
	const router = Router();

	async function getAllUsers(req, res, next) {
		try {
			const users = await UserService.getAllUsers();
			res.json(users);
		} catch (err) {
			next(err);
		}
	}

	async function getUserById(req, res, next) {
		try {
			const user = await UserService.getUserById(req.params.id);
			res.json(user);
		} catch (err) {
			next(err);
		}
	}

	async function createUser(req, res, next) {
		try {
			const newUser = await UserService.createUser(req.body);
			res.status(201).json(newUser);
		} catch (err) {
			next(err);
		}
	}

	async function updateUser(req, res, next) {
		try {
			const updatedUser = await UserService.updateUser(
				req.params.id,
				req.body
			);
			res.json(updatedUser);
		} catch (err) {
			next(err);
		}
	}

	async function deleteUser(req, res, next) {
		try {
			const result = await UserService.deleteUser(req.params.id);
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	}

	return router
		.get('/', getAllUsers)
		.get('/:id', validateRequest(idSchema), getUserById)
		.post('/', validateRequest(userSchema), createUser)
		.put('/:id', updateUser, validateRequest(userSchema))
		.delete('/:id', validateRequest(idSchema), deleteUser);
}

export default createUserRouter;
