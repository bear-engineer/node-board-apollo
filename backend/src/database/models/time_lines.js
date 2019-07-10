/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('time_lines', {
    seq: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dt: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'time_lines'
  });
};
