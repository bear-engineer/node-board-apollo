import { UserInputError, ForbiddenError } from 'apollo-server-express';
import { obtainCoinExp } from '../../utils/updateAsset';
export default {
  Feeds: {
    author: (parent, args, { models }) => {
      return parent.Author;
    },
    comments: parent => {
      return parent.Comments;
    },
  },
  Query: {
    allFeed: async (parent, args, { models, user, roleCheck }, info) => {
      roleCheck(user, 'public');
      const { limit, page } = args;

      // default offset
      let offset = 0;

      // page number
      if (page > 1) {
        offset = limit * (page - 1);
      }

      // page info
      const totalCount = Math.ceil((await models.feeds.count()) / limit);
      const next = page !== totalCount;

      const feeds = await models.feeds.findAll({
        include: [
          {
            model: models.users,
            as: 'Author',
            attributes: ['nick_name', 'username'],
          },
          { model: models.comments, as: 'Comments' },
        ],
        limit,
        offset,
      });
      return { totalCount, next, feeds };
    },
  },

  Mutation: {
    createFeed: async (parent, args, { models, user, roleCheck }, info) => {
      roleCheck(user);
      const { content } = args;
      const feed = await models.feeds.create({
        username: user.username,
        content,
      });
      obtainCoinExp(user, 'feed');
      return feed;
    },
    updateFeed: async (parent, args, { models, user, roleCheck }, info) => {
      roleCheck(user);
      const { feed_id, content } = args;
      const feed = await models.feeds.findByPk(feed_id);
      if (!feed) {
        throw new UserInputError('not found feed');
      }
      if (feed.username !== user.username) {
        throw new ForbiddenError('feed is not owner');
      }
      await feed.update({
        content,
      });
      return feed;
    },
    deleteFeed: async (parent, args, { models, roleCheck, user }, info) => {
      roleCheck(user);
      const { feed_id } = args;
      const feed = await models.feeds.findByPk(feed_id);
      if (!feed) {
        throw new UserInputError('not found feed');
      }
      if (feed.username !== user.username && !user.is_staff) {
        throw new ForbiddenError('feed is not owner');
      }
      return await models.feeds.destroy({ where: { feed_id } });
    },
  },
};
