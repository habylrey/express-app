'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
	class WallPhotos extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method автоматически.
		 */
		static associate(models) {
			// define association here
		}
	}
	WallPhotos.init(
		{
			id: DataTypes.NUMBER,
			user_id: DataTypes.NUMBER,
			group_id: DataTypes.NUMBER,
			file_id: DataTypes.NUMBER,
		},
		{
			sequelize,
			modelName: 'WallPhotos',
		}
	);
	return WallPhotos;
};
