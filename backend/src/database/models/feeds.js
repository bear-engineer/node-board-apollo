/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feeds', {
    feed_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(60),
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
    tableName: 'feeds'
  });
};
