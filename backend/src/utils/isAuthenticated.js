import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs';
import dotenv from 'dotenv';

dotenv.config();

import { AuthenticationError, ForbiddenError } from 'apollo-server-express';

export const roleCheck = (user, role = null) => {
  // login check
  if (!user) {
    throw new AuthenticationError('Not Authenticate');
  }

  const message = 'You do not have access rights.';

  // role check
  switch (role) {
    case 'public':
      return user;
    case 'staff':
      if (!user.is_staff) {
        throw new ForbiddenError(message);
      }
      return user;
    case 'superuser':
      if (!user.is_superuser) {
        throw new ForbiddenError(message);
      }
      return user;
    default:
      if (!user.is_active) {
        throw new ForbiddenError(message);
      }
      return user;
  }
};

// password hash
export const passwordHash = password => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export const passwordCompare = (password, hasPassword) => {
  return bcrypt.compareSync(password, hasPassword);
};

// jwt account hash
export const serializeAcount = id =>
  jwt.sign({ ...id }, process.env.SECRET_KEY, {
    expiresIn: '7d',
  });

export const getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, process.env.SECRET_KEY);
    }

    return null;
  } catch (error) {
    return null;
  }
};
