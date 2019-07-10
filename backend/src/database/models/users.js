/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'users',
    {
      username: {
        type: DataTypes.STRING(60),
        allowNull: false,
        primaryKey: true,
      },
      nick_name: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true,
      },
      auth_key: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      lv: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '1',
      },
      exp: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: '0',
      },
      coin: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
        defaultValue: '0',
      },
      profile_image: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      signup_comment: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
      last_login_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      is_active_item: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
      },
      is_superuser: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      is_staff: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
      is_active: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: '0',
      },
    },
    {
      tableName: 'users',
    }
  );
};
