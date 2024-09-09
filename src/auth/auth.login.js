import jwt from 'jsonwebtoken';
import models from '../common/DTO/models/model.service.js';

function login(req, res, next) {
	const { login, password } = req.body;
	try {
		models.Auth.findOne({
			where: { login: login, password: password },
			include: {
				model: models.User,
				attributes: ['role', 'name'],
			},
		})
			.then((user) => {
				if (!user) {
					return next(new Error('Invalid login or password'));
				}

				const token = jwt.sign(
					{ id: user.id, name: user.User.name, role: user.User.role },
					process.env.JWT_SECRET,
					{ expiresIn: '1h' }
				);

				res.setHeader('Authorization', `Bearer ${token}`);
				res.cookie('token', token, {
					httpOnly: true,
				});

				res.json([
					{
						message: `Hello, ${user.User.role} ${user.User.name}`,
					},
					{ token },
				]);
			})
			.catch((error) => {
				next(error);
			});
	} catch (error) {
		next(error);
	}
}

export default login;
