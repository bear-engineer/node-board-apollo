import { passwordHash } from '../../utils/isAuthenticated';

export default {
  Mutation: {
    register: async (parent, args, { models }, info) => {
      const { username, auth_key, email, nick_name, signup_comment } = args;
      const authKeyHash = passwordHash(auth_key);
      const user = await models.users.create({
        username,
        nick_name,
        signup_comment,
        email,
        auth_key: authKeyHash,
      });
      if (!user) {
        throw new Error('fail Signup');
      }
      return user;
    },
  },
};
