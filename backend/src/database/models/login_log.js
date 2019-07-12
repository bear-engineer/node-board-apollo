/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('login_log', {
    username: {
      type: DataTypes.STRING(60),
      allowNull: false,
      primaryKey: true
    },
    login_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: true
    },
    login_ip: {
      type: DataTypes.CHAR(15),
      allowNull: true
    }
  }, {
    tableName: 'login_log'
  });
};
