import { UserInputError, ForbiddenError } from 'apollo-server-express';
import { getDirectivesFromDocument } from 'apollo-utilities';
import { obtainCoinExp } from '../../utils/updateAsset';

export default {
  Mutation: {
    createComment: async (parent, args, { models, roleCheck, user }, info) => {
      roleCheck(user);
      const { feed_id, content } = args;
      const comment = await models.comments.create({
        feed_id,
        content,
        username: user.username,
      });
      obtainCoinExp(user, 'comment');
      return comment;
    },

    updateComment: async (parent, args, { models, roleCheck, user }, info) => {
      roleCheck(user);
      const { comment_id, content } = args;
      const comment = await models.comments.findByPk(comment_id);
      if (!comment) {
        throw new UserInputError('not found comment');
      }
      if (comment.username !== user.username) {
        throw new ForbiddenError('comment is not owner');
      }
      await comment.update({
        content,
      });
      return comment;
    },
    deleteComment: async (parent, args, { models, roleCheck, user }, info) => {
      roleCheck(user);
      const { comment_id } = args;
      const comment = await models.comments.findByPk(comment_id);
      if (!comment) {
        throw new UserInputError('not found comment');
      }
      if (comment.username !== user.username && !user.is_staff) {
        throw new ForbiddenError('comment is not owner');
      }
      return await models.comments.destroy({ where: { comment_id } });
    },
  },
};
