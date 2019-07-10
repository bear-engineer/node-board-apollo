import { AuthenticationError } from 'apollo-server-express';

export default {
  Query: {
    hello: (parent, args, { models, user, roleCheck }) => {
      roleCheck(user, 'public');
      return user.username;
    },
  },
};
