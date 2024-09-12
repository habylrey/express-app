'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
	class Group extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Group.init(
		{
			id: DataTypes.NUMBER,
			name: DataTypes.STRING,
			age: DataTypes.NUMBER,
			photo_file_id: DataTypes.NUMBER,
		},
		{
			sequelize,
			modelName: 'Group',
		}
	);
	return Group;
};
