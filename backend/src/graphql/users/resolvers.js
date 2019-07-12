import { UserInputError } from 'apollo-server-express';

export default {
  Query: {
    allUserInfo: async (_, args, { models, user, roleCheck }, info) => {
      roleCheck(user);
      const { limit, page } = args;

      // default offset
      let offset = 0;

      // page number
      if (page > 1) {
        offset = limit * (page - 1);
      }
      // page info
      const totalCount = Math.ceil((await models.users.count()) / limit);
      const next = page !== totalCount;

      const users = await models.users.findAll({
        limit,
        offset,
      });
      return { totalCount, next, users };
    },
    searchUser: async (_, args, { models, user, roleCheck }, info) => {
      roleCheck(user);
      const { username, nick_name } = args;
      let users;
      if (username) {
        users = await models.users.findAll({
          where: {
            username,
          },
        });
      } else if (nick_name) {
        users = await models.users.findAll({
          where: {
            nick_name,
          },
        });
      } else {
        throw new UserInputError('username Or nick name is not define');
      }

      return users;
    },
  },
};
