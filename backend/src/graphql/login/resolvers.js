import { passwordCompare, serializeAcount } from '../../utils/isAuthenticated';

export default {
  Mutation: {
    login: async (parent, args, { models }, info) => {
      const { username, auth_key } = args;

      // account check
      const user = await models.users.findByPk(username);
      if (!user) {
        throw new Error('Invalid Login');
      }

      // password check
      const passwordMatch = passwordCompare(auth_key, user.auth_key);
      if (!passwordMatch) {
        throw new Error('Invalid Login');
      }

      // last login at update
      await user.update({
        last_login_at: new Date(),
      });

      // infomaition filter
      const resultUser = {
        username: user.username,
        email: user.email,
        nick_name: user.nick_name,
        is_active: user.is_active,
        is_staff: user.is_staff,
        is_superuser: user.is_superuser,
      };

      // token gen
      const token = serializeAcount(resultUser);

      return {
        token,
        user,
      };
    },
  },
};
