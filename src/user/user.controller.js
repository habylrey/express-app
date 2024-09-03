import { Router } from 'express';
import UserService from './user.service.js';
import { NotFoundException } from '../server/server.exceptions.js';

function createUserRouter() {
	const router = Router();

	const getAllUsers = async (req, res, next) => {
		try {
			const users = await UserService.getAllUsers();
			res.json(users);
		} catch (err) {
			next(err);
		}
	};

	const getUserById = async (req, res, next) => {
		try {
			const user = await UserService.getUserById(req.params.id);
			res.json(user);
		} catch (err) {
			next(err);
		}
	};

	const createUser = async (req, res, next) => {
		try {
			const newUser = await UserService.createUser(req.body);
			res.status(201).json(newUser);
		} catch (err) {
			next(err);
		}
	};

	const updateUser = async (req, res, next) => {
		try {
			const updatedUser = await UserService.updateUser(
				req.params.id,
				req.body
			);
			res.json(updatedUser);
		} catch (err) {
			next(err);
		}
	};

	const deleteUser = async (req, res, next) => {
		try {
			await UserService.deleteUser(req.params.id);
			res.status(204).end();
		} catch (err) {
			next(err);
		}
	};

	return router
		.get('/', getAllUsers)
		.get('/:id', getUserById)
		.post('/', createUser)
		.put('/:id', updateUser)
		.delete('/:id', deleteUser);
}

export default createUserRouter;
