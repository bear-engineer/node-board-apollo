/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tags', {
    seq: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    feed_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    from_username: {
      type: DataTypes.STRING(60),
      allowNull: false,
      primaryKey: true
    },
    to_username: {
      type: DataTypes.STRING(60),
      allowNull: false,
      primaryKey: true
    },
    is_read: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'tags'
  });
};
