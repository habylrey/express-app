'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class legal_datas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  legal_datas.init({
    name: DataTypes.STRING,
    user_id: DataTypes.NUMBER,
    tax_number: DataTypes.STRING,
    id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'legal_datas',
  });
  return legal_datas;
};