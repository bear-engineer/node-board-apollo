import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery as query } from 'react-apollo-hooks';

import Presenter from './presenter';

const GET_ALL_USER = gql`
  query {
    allUserInfo(limit: 20, page: 1) {
      totalCount
      next
      users {
        username
        nick_name
        email
        lv
        exp
        coin
        created_at
        is_active
        is_staff
        is_superuser
        created_at
      }
    }
  }
`;
const Container = (props) => {
  const { data, error, loading } = query(GET_ALL_USER);
  if (loading) return 'is loading...';
  if (error) return 'error';

  return <Presenter {...props} {...data} />;
};

export default Container;
