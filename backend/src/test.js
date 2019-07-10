import models from './database/models';
import { passwordHash } from './utils/isAuthenticated';
models.users.create({
  username: 'superuser',
  auth_key: passwordHash('tpgus9404'),
  email: 'dev.younlab@gmail.com',
  nick_name: 'superuser',
  is_active: 1,
  is_staff: 1,
  is_superuser: 1,
  signup_comment: '',
});
