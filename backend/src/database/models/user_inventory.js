/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_inventory', {
    username: {
      type: DataTypes.STRING(60),
      allowNull: false,
      primaryKey: true
    },
    item_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'user_inventory'
  });
};
