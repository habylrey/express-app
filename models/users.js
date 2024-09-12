'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
	class Users extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method автоматически.
		 */
		static associate(models) {
			// define association here
		}
	}
	Users.init(
		{
			id: DataTypes.NUMBER,
			name: DataTypes.STRING,
			age: DataTypes.NUMBER,
			user_file_id: DataTypes.NUMBER,
		},
		{
			sequelize,
			modelName: 'Users',
		}
	);
	return Users;
};
