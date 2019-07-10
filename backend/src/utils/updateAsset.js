import models from '../database/models';

export const obtainCoinExp = async (user, mode = null) => {
  // user model
  const users = await models.users.findByPk(user.username);
  const { coin, exp, lv } = users;

  // init asset
  let expUp = 0;
  let coinUp = 0;

  // mode setting
  if (mode === 'feed') {
    expUp = 10;
    coinUp = 10;
  }
  if (mode === 'comment') {
    expUp = 5;
    coinUp = 10;
  }

  // level up
  try {
    const expTable = await users.getExps();
    // complete exp <= exp and next_lv True
    if (expTable.exp <= exp + expUp && expTable.next_lv) {
      users.update({
        coin: coin + coinUp,
        exp: exp + expUp - expTable.exp,
        lv: expTable.next_lv,
      });
      return users;
    }
  } catch (error) {}

  // default update
  users.update({
    coin: coin + coinUp,
    exp: exp + expUp,
  });
  return users;
};
