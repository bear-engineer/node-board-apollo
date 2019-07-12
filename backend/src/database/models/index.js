'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users.hasMany(db.feeds, {
  as: 'Feeds',
  foreignKey: 'username',
  sourceKey: 'username',
});
db.users.hasMany(db.login_log, {
  as: 'LoginLogs',
  foreignKey: 'username',
  sourceKey: 'username',
});
db.users.hasOne(db.exp_table, {
  as: 'Exps',
  foreignKey: 'lv',
  sourceKey: 'lv',
});
db.users.hasMany(db.comments, {
  as: 'Comments',
  foreignKey: 'username',
  sourceKey: 'username',
});
db.feeds.hasMany(db.comments, {
  as: 'Comments',
  foreignKey: 'feed_id',
  sourceKey: 'feed_id',
});
db.feeds.belongsTo(db.users, {
  as: 'Author',
  foreignKey: 'username',
  targetKey: 'username',
});
db.login_log.belongsTo(db.users, {
  as: 'LoginUser',
  foreignKey: 'username',
  targetKey: 'username',
});
db.comments.belongsTo(db.feeds, {
  as: 'Feed',
  foreignKey: 'feed_id',
  sourceKey: 'feed_id',
});

module.exports = db;
