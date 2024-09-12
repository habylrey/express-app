'use strict';
/** @type {import('sequelize-cli').Migration} */
export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('orders', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			product: {
				type: Sequelize.STRING,
			},
			user_id: {
				type: Sequelize.NUMBER,
			},
			amount: {
				type: Sequelize.NUMBER,
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
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('orders');
	},
};
