'use strict';
/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
	await queryInterface.createTable('trenings', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		id: {
			type: Sequelize.NUMBER,
		},
		prewiew_file_id: {
			type: Sequelize.NUMBER,
		},
		youtube_link: {
			type: Sequelize.STRING,
		},
		description: {
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
	await queryInterface.dropTable('trenings');
};
