import fs from 'fs/promises';
import path from 'path';
import jwt from 'jsonwebtoken';
import { UnauthorizedException } from '../server/server.exceptions.js';

const login = async (req, res, next) => {
	const { login, password } = req.body;
	const usersFilePath = path.resolve('src/data/users.json');

	let usersData;

	try {
		const fileData = await fs.readFile(usersFilePath, 'utf-8');
		usersData = JSON.parse(fileData);
	} catch (error) {
		return next();
	}

	const user = usersData.find((u) => u.login === login);

	if (!user || user.password !== password) {
		return next(new UnauthorizedException('Invalid login or password'));
	}

	try {
		const token = jwt.sign(
			{ id: user.id, name: user.name },
			process.env.JWT_SECRET,
			{ expiresIn: '1h' }
		);

		res.setHeader('Authorization', `Bearer ${token}`);
		res.cookie('token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
		});

		res.json({ token });
	} catch (error) {
		return next();
	}
};

export default login;
