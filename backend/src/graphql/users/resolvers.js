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
  },
};
