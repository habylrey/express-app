'use strict';
/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
	await queryInterface.createTable('legal_datas', {
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
			type: Sequelize.NUMBER,
		},
		tax_number: {
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
};

export const down = async (queryInterface, Sequelize) => {
	await queryInterface.dropTable('legal_datas');
};
