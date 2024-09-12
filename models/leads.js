'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class leads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  leads.init({
    name: DataTypes.STRING,
    user_id: DataTypes.NUMBER,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'leads',
  });
  return leads;
};