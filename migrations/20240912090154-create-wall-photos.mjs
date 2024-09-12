'use strict';
/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
	await queryInterface.createTable('wall_photos', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		id: {
			type: Sequelize.NUMBER,
		},
		user_id: {
			type: Sequelize.NUMBER,
		},
		group_id: {
			type: Sequelize.NUMBER,
		},
		file_id: {
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
	await queryInterface.dropTable('wall_photos');
};
