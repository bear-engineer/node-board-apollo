export default {
  Query: {
    userProfile: async (parent, args, { models, roleCheck, user }, info) => {
      roleCheck(user);
      const { username } = args;
      const users = await models.users.findByPk(username);
      return users;
    },
  },
};
