'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  group_user.init({
    name: DataTypes.STRING,
    user_id: DataTypes.NUMBER,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    status: DataTypes.STRING,
    group_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'group_user',
  });
  return group_user;
};