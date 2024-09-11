export default {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('auths', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			password: {
				type: Sequelize.STRING,
			},
			user_id: {
				type: Sequelize.INTEGER,
			},
			login: {
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
		await queryInterface.dropTable('auths');
	},
};
