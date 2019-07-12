import { UserInputError } from 'apollo-server-express';

export default {
  Query: {
    allUserInfo: async (_, args, { models, user, roleCheck }, info) => {
      roleCheck(user, 'staff');
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
      roleCheck(user, 'staff');
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
  Mutation: {
    deleteUser: async (_, args, { models, user, roleCheck }, info) => {
      roleCheck(user, 'staff');
      const { username } = args;
      const users = await models.users.destroy({ where: { username } });
      return users;
    },
    signUser: async (_, args, { models, user, roleCheck }, info) => {
      roleCheck(user, 'staff');
      const { username } = args;
      const users = await models.users.findByPk(username);
      if (users.is_active) {
        users.update({ is_active: 0 });
        return true;
      } else if (!users.is_active) {
        users.update({ is_active: 1 });
        return true;
      }
    },
  },
};
