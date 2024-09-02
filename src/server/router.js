import userRoutes from '../user/user.controller.js';
import groupRoutes from '../group/group.controller.js';
export function registerRoutes(app) {
	app.use('/user', userRoutes);
	app.use('/group', groupRoutes);
}
