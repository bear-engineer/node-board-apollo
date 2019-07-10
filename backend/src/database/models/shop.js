/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shop', {
    seq: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    price: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    amount: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'shop'
  });
};
