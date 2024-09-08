import { sequelize } from './DTO/models/model.service.js';

async function syncDatabase() {
	try {
		await sequelize.sync({ force: false });
		console.log('Database synchronized successfully.');
	} catch (error) {
		console.error('Error synchronizing the database:', error);
		process.exit(1);
	}
}

syncDatabase();
