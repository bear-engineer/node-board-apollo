import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
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
      }
    }
  }
`;

const container = props => (
  <Query query={GET_ALL_USER}>
    {({ data, loading, error }) => {
      if (loading) return 'is loading...';
      if (error) return 'error';
      return <Presenter {...props} {...data} />;
    }}
  </Query>
);

export default container;
