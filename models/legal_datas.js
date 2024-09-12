'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class LegalDatas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LegalDatas.init({
    name: DataTypes.STRING,
    user_id: DataTypes.NUMBER,
    tax_number: DataTypes.STRING,
    id: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'LegalDatas',
  });
  return LegalDatas;
};