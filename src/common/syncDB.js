import { sequelize } from './models/model.service.js';
async function syncDatabase() {
	try {
		await sequelize.sync({ force: false });
		console.log('Database synchronized successfully.');
	} catch (error) {
		console.error('Error synchronizing database:', error);
	} finally {
		process.exit();
	}
}

syncDatabase();
