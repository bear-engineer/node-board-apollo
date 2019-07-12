import React, { Fragment } from 'react';

import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

const Admin = props => (
  <Fragment>
    {localStorage.getItem('api_token') ? (
      <AdminPanel {...props} />
    ) : (
      <AdminLogin {...props} />
    )}
  </Fragment>
);

export default Admin;
