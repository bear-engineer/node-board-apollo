import { passwordCompare, serializeAcount } from '../../utils/isAuthenticated';
import { AuthenticationError } from 'apollo-server-express';
export default {
  Query: {
    checkAdmin: async (parent, args, { models, user, roleCheck }, info) => {
      roleCheck(user, 'staff');
      return true;
    },
  },
  Mutation: {
    login: async (parent, args, { models, req }, info) => {
      const { username, auth_key } = args;

      // account check
      const user = await models.users.findByPk(username);
      if (!user) {
        throw new AuthenticationError('Invalid Login');
      }

      // password check
      const passwordMatch = passwordCompare(auth_key, user.auth_key);
      if (!passwordMatch) {
        throw new AuthenticationError('Invalid Login');
      }

      // last login at update
      await user.update({
        last_login_at: new Date(),
      });

      // ip check
      await models.login_log.create({
        username: user.username,
        login_ip: req.ip,
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
