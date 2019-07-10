/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('items', {
    item_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    item_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'items'
  });
};
