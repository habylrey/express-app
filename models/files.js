'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
	class Files extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Files.init(
		{
			id: DataTypes.NUMBER,
			bucket: DataTypes.STRING,
			file_name: DataTypes.STRING,
			file_size: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Files',
		}
	);
	return Files;
};
