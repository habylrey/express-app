import jwt from 'jsonwebtoken';
import models from '../DTO/models/model.service.js';

const login = async (req, res, next) => {
	const { login, password } = req.body;

	try {
		const user = await models.Auth.findOne({
			where: { login: login, password: password },
		});
		const userId = await models.User.findOne({
			where: { id: user.dataValues.user_id },
		});
		if (!user) {
			return next();
		}

		const token = jwt.sign(
			{ id: user.id, name: user.name, role: userId.dataValues.role },
			process.env.JWT_SECRET,
			{ expiresIn: '1h' }
		);

		res.setHeader('Authorization', `Bearer ${token}`);
		res.cookie('token', token, {
			httpOnly: true,
		});

		res.json([
			{
				message: `Hello, ${userId.dataValues.role} ${userId.dataValues.name}`,
			},
			{ token },
		]);
	} catch (error) {
		return next();
	}
};

export default login;
