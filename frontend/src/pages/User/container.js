import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { useQuery as query } from 'react-apollo-hooks';

import Presenter from './presenter';

const GET_ALL_USER_QUERY = gql`
  query AllUser($limit: Int!, $page: Int!) {
    allUserInfo(limit: $limit, page: $page) {
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

const UserData = () => (
  <Query
    query={GET_ALL_USER_QUERY}
    variables={{ limit: 20, page: 0 }}
    fetchPolicy="cache-and-network"
  >
    {({ data, fetchMore, AllUser }) => (
      <AllUser
        entries={data.allUserInfo.users || []}
        onLoadMore={() => fetchMore({ variables: { page: data.allUserInfo } })}
      />
    )}
  </Query>
);

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
