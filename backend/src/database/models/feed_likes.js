/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feed_likes', {
    feed_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(60),
      allowNull: false,
      primaryKey: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'feed_likes'
  });
};
