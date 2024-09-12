'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
	class Trenings extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method автоматически.
		 */
		static associate(models) {
			// define association here
		}
	}
	Trenings.init(
		{
			id: DataTypes.NUMBER,
			prewiew_file_id: DataTypes.NUMBER,
			youtube_link: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Trenings',
		}
	);
	return Trenings;
};
