export default {
  Query: {
    activeUser: async (parent, args, { models, user, roleCheck }, info) => {
      roleCheck(user, 'staff');
      const users = await models.users.findAll({ where: { is_active: 0 } });
      return users;
    },
  },
  Mutation: {
    enableActiveUser: async (
      parent,
      args,
      { models, user, roleCheck },
      info
    ) => {
      roleCheck(user, 'staff');
      const { username } = args;
      const users = await models.users.update(
        { is_active: 1 },
        { where: { username: username } }
      );
      return true;
    },
  },
};
