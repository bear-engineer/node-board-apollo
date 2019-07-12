// login
export const saveToken = (token) => {
  localStorage.setItem('api_token', `bearer ${token}`);
};

// logout
export const deleteToken = () => {
  localStorage.removeItem('api_token');
};

// Token expiration
export const checkToken = (errorLog) => {
  if (errorLog === 'UNAUTHENTICATED') {
    return deleteToken();
  }
  return errorLog;
};

// is staff check
export const checkAdmin = (user) => {
  if (user.is_staff) {
    return true;
  }
  return false;
};
