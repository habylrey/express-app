'use strict';
/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
	await queryInterface.createTable('files', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		id: {
			type: Sequelize.NUMBER,
		},
		bucket: {
			type: Sequelize.STRING,
		},
		file_name: {
			type: Sequelize.STRING,
		},
		file_size: {
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
	await queryInterface.dropTable('files');
};
