import React, { Fragment } from 'react';

import { Switch, Route } from 'react-router-dom';
import AdminContent from '../../components/molecules/AdminContent';
import AdminUser from './AdminUser';

const AdminPanel = (props) => {
  const { match } = props;
  return (
    <Fragment>
      <AdminContent {...props}>
        <Switch>
          <Route exact path={`${match.url}/`} />
          <Route path={`${match.url}/user`} component={AdminUser} />
        </Switch>
      </AdminContent>
      {/* <SideBar {...props} /> */}
      {/* <MainContentsContainer>
        <h1>Hi</h1>

      </MainContentsContainer> */}
    </Fragment>
  );
};

export default AdminPanel;
