export const obtainCoinExp = async (user, mode = null) => {
  const { coin, exp, lv } = user;

  switch (mode) {
    case 'feed':
      user.update({
        coin: coin + 10,
        exp: exp + 10,
      });
      return user;
    case 'comment':
      user.update({
        coin: coin + 5,
        exp: exp + 5,
      });
    default:
      return user;
  }
};
