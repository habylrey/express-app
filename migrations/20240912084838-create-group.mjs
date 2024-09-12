'use strict';
/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
	await queryInterface.createTable('groups', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		id: {
			type: Sequelize.NUMBER,
		},
		name: {
			type: Sequelize.STRING,
		},
		age: {
			type: Sequelize.NUMBER,
		},
		photo_file_id: {
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
};

export const down = async (queryInterface, Sequelize) => {
	await queryInterface.dropTable('groups');
};
