'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
	class Auth extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Auth.init(
		{
			id: DataTypes.NUMBER,
			password: DataTypes.STRING,
			login: DataTypes.STRING,
			user_id: DataTypes.NUMBER,
		},
		{
			sequelize,
			modelName: 'Auth',
		}
	);
	return Auth;
};
