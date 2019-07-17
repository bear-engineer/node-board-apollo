import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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

const Container = props => (
  <Query
    query={GET_ALL_USER_QUERY}
    variables={{ limit: 10, page: 1 }}
    fetchPolicy="cache-and-network"
  >
    {({
      data, fetchMore, loading, error,
    }) => {
      const load = () => fetchMore({
        variables: { page: data.allUserInfo.next },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }
          return {
            allUserInfo: {
              next: fetchMoreResult.allUserInfo.next,
              users: [
                ...prev.allUserInfo.users,
                ...fetchMoreResult.allUserInfo.users,
              ],
              __typename: fetchMoreResult.allUserInfo.__typename,
            },
          };
        },
      });
      if (loading) return 'loading...';
      if (error) return 'error!';
      return (
        <div>
          <Presenter
            {...props}
            data={data.allUserInfo.users}
            next={data.allUserInfo.next}
            onLoad={load}
          />
        </div>
      );
    }}
  </Query>
);

export default Container;
