export default {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('leads', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			user_id: {
				type: Sequelize.INTEGER,
			},
			email: {
				type: Sequelize.STRING,
			},
			phone_number: {
				type: Sequelize.STRING,
			},
			status: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('leads');
	},
};
