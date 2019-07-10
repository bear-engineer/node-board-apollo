import models from './database/models';
import { passwordHash } from './utils/isAuthenticated';
import { forEach } from 'iterall';
import { obtainCoinExp } from './utils/updateAsset';
// get model
// models.users
//   .findByPk('superuser')
//   .then(user => console.log(user.getExps().then(exp => console.log(exp))));

// user in feeds
// models.users
//   .findByPk('superuser')
//   .then(user => user.getFeeds().then(feed => console.log(feed)));

// models.feeds.findAll().then(feed => forEach(feed, console.log(feed)));

// where
// models.feeds
//   .findOne({ where: { username: 'admin' } })
//   .then(feed => feed.getAuthor().then(author => console.log(author)));

// join search
// models.users
//   .findOne({
//     where: { username: 'admin' },
//     attributes: ['username'],
//     include: [
//       { model: models.feeds, as: 'Feeds', attributes: ['feed_id', 'username'] },
//     ],
//   })
//   .then(user =>
//     forEach(user.Feeds, feed => {
//       console.log(feed.username);
//     })
//   );

models.users.findByPk('admin').then(user => {
  obtainCoinExp(user);
});
