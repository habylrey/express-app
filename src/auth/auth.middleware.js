import jwt from 'jsonwebtoken';
import { UnauthorizedException } from '../server/server.exceptions.js';

const authenticateJWT = (req, res, next) => {
	const authHeader = req.headers.authorization;
	const token = authHeader?.split(' ')[1] || req.cookies?.token;

	if (!token) {
		return next(new UnauthorizedException('No token provided'));
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) {
			return next();
		}
		req.user = user;
		next();
	});
};

export default authenticateJWT;
