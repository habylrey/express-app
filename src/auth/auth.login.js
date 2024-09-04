import jwt from 'jsonwebtoken';
import dbRepository from '../repository/db.repository.js';
import { UnauthorizedException } from '../server/server.exceptions.js';

const login = async (req, res, next) => {
	const { login, password } = req.body;

	try {
		const user = await dbRepository.queryOne(
			`SELECT * FROM "auth" WHERE login = ${login} AND password = ${password}`
		);

		if (!user) {
			return next();
		}

		const token = jwt.sign(
			{ id: user.id, name: user.name },
			process.env.JWT_SECRET,
			{ expiresIn: '1h' }
		);

		res.setHeader('Authorization', `Bearer ${token}`);
		res.cookie('token', token, {
			httpOnly: true,
		});

		res.json({ token });
	} catch (error) {
		console.error(error);
		return next();
	}
};

export default login;
