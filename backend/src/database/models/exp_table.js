/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exp_table', {
    lv: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      primaryKey: true
    },
    exp: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    next_lv: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'exp_table'
  });
};
